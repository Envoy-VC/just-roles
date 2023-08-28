// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// ---------------- External Imports ---------------- //
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

// ---------------- Internal Imports ---------------- //
import "./PhatRollupAnchor.sol";

/// @author Vedant Chainani
contract LensRoles is AccessControl, Ownable, PhatRollupAnchor {
    /* --------------------------------------------------------- 
                            State Variables
    ------------------------------------------------------------*/

    /// @dev The number of roles in the contract
    uint256 public totalRoles;
    string[] public roleNames;

    /// @dev The Request ID for Phat Contract
    uint public nextRequest = 1;

    /// @dev Map of Request ID to Request Object
    mapping(uint => RequestObject) public requests;

    /// @dev Map of Role ID to Role Object
    mapping(uint => RoleObject) public Roles;

    /* --------------------------------------------------------- 
                            Events
    ------------------------------------------------------------*/

    /// @dev Events for when a response is received from Phat Contract
    event ResponseReceived(uint reqId, string pair, uint256 value);
    event ErrorReceived(uint reqId, string pair, uint256 errno);

    /// @dev Events when a role is Created or Edited
    event RoleCreated(
        uint256 roleId,
        string roleName,
        uint256 thresholdLower,
        uint256 thresholdUpper
    );
    event RoleEdited(
        uint256 roleId,
        string roleName,
        uint256 thresholdLower,
        uint256 thresholdUpper
    );

    /* --------------------------------------------------------- 
                            Constants
    ------------------------------------------------------------*/

    /// @dev Helper Constants for type of response received
    uint constant TYPE_RESPONSE = 0;
    uint constant TYPE_ERROR = 2;

    /* --------------------------------------------------------- 
                            Structs
    ------------------------------------------------------------*/

    /// @dev Struct for Request Object containing ProfileId which is being requested and caller
    struct RequestObject {
        string profileId;
        address caller;
    }

    /// @dev Struct for Role Object containing Role, Lower Threshold and Upper Threshold followers
    struct RoleObject {
        bytes32 Role;
        string roleName;
        uint256 thresholdLower;
        uint256 thresholdUpper;
    }

    /* --------------------------------------------------------- 
                        Constructor/Initializer
    ------------------------------------------------------------*/
    constructor(
        string[] memory _roleNames,
        uint256[] memory _thresholdsLower,
        uint256[] memory _thresholdsUpper,
        address phatAttestor
    ) {
        totalRoles = _roleNames.length;
        roleNames = _roleNames;
        for (uint256 i = 0; i < totalRoles; i++) {
            Roles[i] = RoleObject({
                Role: keccak256(abi.encodePacked(_roleNames[i])),
                roleName: _roleNames[i],
                thresholdLower: _thresholdsLower[i],
                thresholdUpper: _thresholdsUpper[i]
            });
        }
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
    }

    /* --------------------------------------------------------- 
                            Functions
    ------------------------------------------------------------*/

    /// @dev Request for a role providing a Lens Profile ID
    /// @param _roleId The ID of the role being requested for checks
    /// @param profileId The Lens Profile ID of the user requesting the role
    /// @notice This function is called by the user requesting the role
    function getRole(uint _roleId, string memory profileId) public {
        bytes32 Role = Roles[_roleId].Role;
        require(!hasRole(Role, msg.sender), "Caller Already has role");
        require(isValidLensProfile(profileId), "Invalid Lens Profile Format");
        uint id = nextRequest;
        requests[id] = RequestObject({
            profileId: profileId,
            caller: msg.sender
        });
        _pushMessage(abi.encode(id, profileId));
        nextRequest += 1;
    }

    /// @dev Get the current role of a user
    /// @param account The address of the user whose role is being checked
    /// @return roleId The ID of role
    function getCurrentRole(address account) public view returns (uint roleId) {
        for (uint i = 0; i < totalRoles; i++) {
            if (hasRole(Roles[i].Role, account)) {
                return i;
            }
        }
        return totalRoles + 1;
    }

    /* ---------------------------------------------------------  
                            Owner Methods
    ------------------------------------------------------------*/

    /// @dev Add a new role to the contract
    /// @param _roleName The name of the role being added
    /// @param _thresholdLower The lower threshold of followers for the role
    /// @param _thresholdUpper The upper threshold of followers for the role
    /// @notice This function is called by the owner of the contract
    function addRole(
        string memory _roleName,
        uint256 _thresholdLower,
        uint256 _thresholdUpper
    ) public onlyOwner {
        totalRoles += 1;
        Roles[totalRoles] = RoleObject({
            Role: keccak256(abi.encodePacked(_roleName)),
            roleName: _roleName,
            thresholdLower: _thresholdLower,
            thresholdUpper: _thresholdUpper
        });
        emit RoleCreated(
            totalRoles,
            _roleName,
            _thresholdLower,
            _thresholdUpper
        );
    }

    /// @dev Edit an existing role in the contract
    /// @param _roleId The ID of the role being edited
    /// @param _roleName The name of the role being edited
    /// @param _thresholdLower The lower threshold of followers for the role
    /// @param _thresholdUpper The upper threshold of followers for the role
    function editRole(
        uint256 _roleId,
        string memory _roleName,
        uint256 _thresholdLower,
        uint256 _thresholdUpper
    ) public onlyOwner {
        require(_roleId <= totalRoles, "Role does not exist.");
        RoleObject storage Role = Roles[_roleId];
        Role.Role = keccak256(abi.encodePacked(_roleName));
        Role.thresholdLower = _thresholdLower;
        Role.thresholdUpper = _thresholdUpper;
        emit RoleEdited(_roleId, _roleName, _thresholdLower, _thresholdUpper);
    }

    /* --------------------------------------------------------- 
                            Internal Functions
    ------------------------------------------------------------*/

    /// @dev Callback function for Phat Contract
    /// @notice This function is called by Phat Contract
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

    /// @dev Grant a role to a user as per the total followers receiver by Phat Contract
    /// @param caller The address of the user being granted the role
    /// @param totalFollowers Total followers of a Lens Profile returned by the Phat Contract
    function grantRole(address caller, uint256 totalFollowers) internal {
        uint currentRole = getCurrentRole(caller);
        for (uint i = 0; i < totalRoles; i++) {
            if (
                Roles[i].thresholdLower >= totalFollowers &&
                Roles[i].thresholdUpper < totalFollowers
            ) {
                if (currentRole == i) {
                    break;
                } else if (currentRole == totalRoles + 1) {
                    _grantRole(Roles[i].Role, caller);
                    break;
                } else {
                    _revokeRole(Roles[currentRole].Role, caller);
                    _grantRole(Roles[i].Role, caller);
                    break;
                }
            }
        }
    }

    function isValidLensProfile(
        string memory _profileId
    ) internal pure returns (bool isValid) {
        bytes memory profileIdInBytes = bytes(_profileId);
        if (profileIdInBytes.length <= 2) {
            return false;
        }
        if (profileIdInBytes[0] != "0" || profileIdInBytes[1] != "x")
            return false;
        return true;
    }
}
