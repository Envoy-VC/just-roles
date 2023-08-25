// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./PhatRollupAnchor.sol";

contract LensRoles is AccessControl, Ownable, PhatRollupAnchor {
    event ResponseReceived(uint reqId, string pair, uint256 value);
    event ErrorReceived(uint reqId, string pair, uint256 errno);

    uint constant TYPE_RESPONSE = 0;
    uint constant TYPE_ERROR = 2;

    struct RequestObject {
        string profileId;
        address caller;
    }
    mapping(uint => RequestObject) requests;
    uint nextRequest = 1;

    uint256 public roleCount = 0;
    mapping(uint => RoleObject) public Roles;
    struct RoleObject {
        bytes32 Role;
        uint256 thresholdLower;
        uint256 thresholdUpper;
    }

    constructor(
        string[] memory _roleNames,
        uint256[] memory _thresholdsLower,
        uint256[] memory _thresholdsUpper,
        address phatAttestor
    ) {
        roleCount = _roleNames.length;
        addRoles(_roleNames, _thresholdsLower, _thresholdsUpper);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
    }

    function addRoles(
        string[] memory _roleNames,
        uint256[] memory _thresholdsLower,
        uint256[] memory _thresholdsUpper
    ) internal onlyOwner {
        for (uint256 i = 0; i < roleCount; i++) {
            Roles[i] = RoleObject({
                Role: keccak256(abi.encodePacked(_roleNames[i])),
                thresholdLower: _thresholdsLower[i],
                thresholdUpper: _thresholdsUpper[i]
            });
        }
    }

    function getRole(uint _roleId, string memory profileId) public {
        bytes32 Role = Roles[_roleId].Role;
        require(!hasRole(Role, msg.sender), "Caller Already has role");
        // TODO: Check if profileId is in correct format
        uint id = nextRequest;
        requests[id] = RequestObject({
            profileId: profileId,
            caller: msg.sender
        });
        _pushMessage(abi.encode(id, profileId));
        nextRequest += 1;
    }

    function _onMessageReceived(bytes calldata action) internal override {
        require(action.length == 32 * 3, "cannot parse action");
        (uint respType, uint id, uint256 data) = abi.decode(
            action,
            (uint, uint, uint256)
        );
        if (respType == TYPE_RESPONSE) {
            emit ResponseReceived(id, requests[id].profileId, data);
            grantRole(requests[id].caller, data);
            delete requests[id];
        } else if (respType == TYPE_ERROR) {
            emit ErrorReceived(id, requests[id].profileId, data);
            delete requests[id];
        }
    }

    function grantRole(address caller, uint256 totalFollowers) internal {
        for (uint i = 0; i < roleCount; i++) {
            if (
                Roles[i].thresholdLower > totalFollowers &&
                Roles[i - 1].thresholdUpper < totalFollowers
            ) {
                _grantRole(Roles[i].Role, caller);
                break;
            }
        }
    }

    function addRole(
        string memory _roleName,
        uint256 _thresholdLower,
        uint256 _thresholdUpper
    ) public onlyOwner {
        roleCount += 1;
        Roles[roleCount] = RoleObject({
            Role: keccak256(abi.encodePacked(_roleName)),
            thresholdLower: _thresholdLower,
            thresholdUpper: _thresholdUpper
        });
    }

    function editRole(
        uint256 _roleId,
        string memory _roleName,
        uint256 _thresholdLower,
        uint256 _thresholdUpper
    ) public onlyOwner {
        require(_roleId <= roleCount, "Role does not exist.");
        RoleObject storage Role = Roles[_roleId];
        Role.Role = keccak256(abi.encodePacked(_roleName));
        Role.thresholdLower = _thresholdLower;
        Role.thresholdUpper = _thresholdUpper;
    }
}
