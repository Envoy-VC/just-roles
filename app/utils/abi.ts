export const ABI = [
	{
		type: 'constructor',
		name: '',
		inputs: [
			{
				type: 'string[]',
				name: '_roleNames',
				internalType: 'string[]',
			},
			{
				type: 'uint256[]',
				name: '_thresholdsLower',
				internalType: 'uint256[]',
			},
			{
				type: 'uint256[]',
				name: '_thresholdsUpper',
				internalType: 'uint256[]',
			},
			{
				type: 'address',
				name: 'phatAttestor',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'error',
		name: 'BadAttestor',
		inputs: [],
		outputs: [],
	},
	{
		type: 'error',
		name: 'BadCondLen',
		inputs: [
			{
				type: 'uint256',
				name: 'kenLen',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'valueLen',
				internalType: 'uint256',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'BadUpdateLen',
		inputs: [
			{
				type: 'uint256',
				name: 'kenLen',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'valueLen',
				internalType: 'uint256',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'CannotDecodeAction',
		inputs: [
			{
				type: 'uint8',
				name: 'actionId',
				internalType: 'uint8',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'CondNotMet',
		inputs: [
			{
				type: 'bytes',
				name: 'cond',
				internalType: 'bytes',
			},
			{
				type: 'uint32',
				name: 'expected',
				internalType: 'uint32',
			},
			{
				type: 'uint32',
				name: 'actual',
				internalType: 'uint32',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'Internal_toUint32Strict_outOfBounds',
		inputs: [
			{
				type: 'bytes',
				name: 'data',
				internalType: 'bytes',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'InvalidPopTarget',
		inputs: [
			{
				type: 'uint256',
				name: 'targetIdx',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'tailIdx',
				internalType: 'uint256',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'InvalidShortString',
		inputs: [],
		outputs: [],
	},
	{
		type: 'error',
		name: 'MetaTxSignatureNotMatch',
		inputs: [],
		outputs: [],
	},
	{
		type: 'error',
		name: 'NonceTooLow',
		inputs: [
			{
				type: 'uint256',
				name: 'actual',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'currentNonce',
				internalType: 'uint256',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'StringTooLong',
		inputs: [
			{
				type: 'string',
				name: 'str',
				internalType: 'string',
			},
		],
		outputs: [],
	},
	{
		type: 'error',
		name: 'UnsupportedAction',
		inputs: [
			{
				type: 'uint8',
				name: 'actionId',
				internalType: 'uint8',
			},
		],
		outputs: [],
	},
	{
		type: 'event',
		name: 'EIP712DomainChanged',
		inputs: [],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'ErrorReceived',
		inputs: [
			{
				type: 'uint256',
				name: 'reqId',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: 'pair',
				indexed: false,
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'errno',
				indexed: false,
				internalType: 'uint256',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'MessageProcessedTo',
		inputs: [
			{
				type: 'uint256',
				name: '',
				indexed: false,
				internalType: 'uint256',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'MessageQueued',
		inputs: [
			{
				type: 'uint256',
				name: 'idx',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'bytes',
				name: 'data',
				indexed: false,
				internalType: 'bytes',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'MetaTxDecoded',
		inputs: [],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'OwnershipTransferred',
		inputs: [
			{
				type: 'address',
				name: 'previousOwner',
				indexed: true,
				internalType: 'address',
			},
			{
				type: 'address',
				name: 'newOwner',
				indexed: true,
				internalType: 'address',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'ResponseReceived',
		inputs: [
			{
				type: 'uint256',
				name: 'reqId',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: 'pair',
				indexed: false,
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'value',
				indexed: false,
				internalType: 'uint256',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'RoleAdminChanged',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				type: 'bytes32',
				name: 'previousAdminRole',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				type: 'bytes32',
				name: 'newAdminRole',
				indexed: true,
				internalType: 'bytes32',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'RoleCreated',
		inputs: [
			{
				type: 'uint256',
				name: 'roleId',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: 'roleName',
				indexed: false,
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'thresholdLower',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'thresholdUpper',
				indexed: false,
				internalType: 'uint256',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'RoleEdited',
		inputs: [
			{
				type: 'uint256',
				name: 'roleId',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: 'roleName',
				indexed: false,
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'thresholdLower',
				indexed: false,
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'thresholdUpper',
				indexed: false,
				internalType: 'uint256',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'RoleGranted',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				indexed: true,
				internalType: 'address',
			},
			{
				type: 'address',
				name: 'sender',
				indexed: true,
				internalType: 'address',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'RoleRevoked',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				indexed: true,
				internalType: 'address',
			},
			{
				type: 'address',
				name: 'sender',
				indexed: true,
				internalType: 'address',
			},
		],
		outputs: [],
		anonymous: false,
	},
	{
		type: 'function',
		name: 'ATTESTOR_ROLE',
		inputs: [],
		outputs: [
			{
				type: 'bytes32',
				name: '',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'DEFAULT_ADMIN_ROLE',
		inputs: [],
		outputs: [
			{
				type: 'bytes32',
				name: '',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'Roles',
		inputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				type: 'bytes32',
				name: 'Role',
				internalType: 'bytes32',
			},
			{
				type: 'string',
				name: 'roleName',
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'thresholdLower',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: 'thresholdUpper',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'addRole',
		inputs: [
			{
				type: 'string',
				name: '_roleName',
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: '_thresholdLower',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: '_thresholdUpper',
				internalType: 'uint256',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'editRole',
		inputs: [
			{
				type: 'uint256',
				name: '_roleId',
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: '_roleName',
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: '_thresholdLower',
				internalType: 'uint256',
			},
			{
				type: 'uint256',
				name: '_thresholdUpper',
				internalType: 'uint256',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'eip712Domain',
		inputs: [],
		outputs: [
			{
				type: 'bytes1',
				name: 'fields',
				internalType: 'bytes1',
			},
			{
				type: 'string',
				name: 'name',
				internalType: 'string',
			},
			{
				type: 'string',
				name: 'version',
				internalType: 'string',
			},
			{
				type: 'uint256',
				name: 'chainId',
				internalType: 'uint256',
			},
			{
				type: 'address',
				name: 'verifyingContract',
				internalType: 'address',
			},
			{
				type: 'bytes32',
				name: 'salt',
				internalType: 'bytes32',
			},
			{
				type: 'uint256[]',
				name: 'extensions',
				internalType: 'uint256[]',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'getCurrentRole',
		inputs: [
			{
				type: 'address',
				name: 'account',
				internalType: 'address',
			},
		],
		outputs: [
			{
				type: 'uint256',
				name: 'roleId',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'getRole',
		inputs: [
			{
				type: 'uint256',
				name: '_roleId',
				internalType: 'uint256',
			},
			{
				type: 'string',
				name: 'profileId',
				internalType: 'string',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'getRoleAdmin',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				internalType: 'bytes32',
			},
		],
		outputs: [
			{
				type: 'bytes32',
				name: '',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'getStorage',
		inputs: [
			{
				type: 'bytes',
				name: 'key',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'bytes',
				name: '',
				internalType: 'bytes',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'grantRole',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'hasRole',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				internalType: 'address',
			},
		],
		outputs: [
			{
				type: 'bool',
				name: '',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'metaTxGetNonce',
		inputs: [
			{
				type: 'address',
				name: 'from',
				internalType: 'address',
			},
		],
		outputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'metaTxPrepare',
		inputs: [
			{
				type: 'address',
				name: 'from',
				internalType: 'address',
			},
			{
				type: 'bytes',
				name: 'data',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'tuple',
				name: '',
				components: [
					{
						type: 'address',
						name: 'from',
						internalType: 'address',
					},
					{
						type: 'uint256',
						name: 'nonce',
						internalType: 'uint256',
					},
					{
						type: 'bytes',
						name: 'data',
						internalType: 'bytes',
					},
				],
				internalType: 'struct MetaTxReceiver.ForwardRequest',
			},
			{
				type: 'bytes32',
				name: '',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'metaTxPrepareWithNonce',
		inputs: [
			{
				type: 'address',
				name: 'from',
				internalType: 'address',
			},
			{
				type: 'bytes',
				name: 'data',
				internalType: 'bytes',
			},
			{
				type: 'uint256',
				name: 'nonce',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				type: 'tuple',
				name: '',
				components: [
					{
						type: 'address',
						name: 'from',
						internalType: 'address',
					},
					{
						type: 'uint256',
						name: 'nonce',
						internalType: 'uint256',
					},
					{
						type: 'bytes',
						name: 'data',
						internalType: 'bytes',
					},
				],
				internalType: 'struct MetaTxReceiver.ForwardRequest',
			},
			{
				type: 'bytes32',
				name: '',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'metaTxRollupU256CondEq',
		inputs: [
			{
				type: 'tuple',
				name: 'req',
				components: [
					{
						type: 'address',
						name: 'from',
						internalType: 'address',
					},
					{
						type: 'uint256',
						name: 'nonce',
						internalType: 'uint256',
					},
					{
						type: 'bytes',
						name: 'data',
						internalType: 'bytes',
					},
				],
				internalType: 'struct MetaTxReceiver.ForwardRequest',
			},
			{
				type: 'bytes',
				name: 'signature',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'bool',
				name: '',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'metaTxVerify',
		inputs: [
			{
				type: 'tuple',
				name: 'req',
				components: [
					{
						type: 'address',
						name: 'from',
						internalType: 'address',
					},
					{
						type: 'uint256',
						name: 'nonce',
						internalType: 'uint256',
					},
					{
						type: 'bytes',
						name: 'data',
						internalType: 'bytes',
					},
				],
				internalType: 'struct MetaTxReceiver.ForwardRequest',
			},
			{
				type: 'bytes',
				name: 'signature',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'bool',
				name: '',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'nextRequest',
		inputs: [],
		outputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'owner',
		inputs: [],
		outputs: [
			{
				type: 'address',
				name: '',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'queueGetBytes',
		inputs: [
			{
				type: 'bytes',
				name: 'key',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'bytes',
				name: '',
				internalType: 'bytes',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'queueGetPrefix',
		inputs: [],
		outputs: [
			{
				type: 'bytes',
				name: '',
				internalType: 'bytes',
			},
		],
		stateMutability: 'pure',
	},
	{
		type: 'function',
		name: 'queueGetUint',
		inputs: [
			{
				type: 'bytes',
				name: 'key',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'uint32',
				name: '',
				internalType: 'uint32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'renounceOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'renounceRole',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'requests',
		inputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				type: 'string',
				name: 'profileId',
				internalType: 'string',
			},
			{
				type: 'address',
				name: 'caller',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'revokeRole',
		inputs: [
			{
				type: 'bytes32',
				name: 'role',
				internalType: 'bytes32',
			},
			{
				type: 'address',
				name: 'account',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'roleNames',
		inputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				type: 'string',
				name: '',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'rollupU256CondEq',
		inputs: [
			{
				type: 'bytes[]',
				name: 'condKeys',
				internalType: 'bytes[]',
			},
			{
				type: 'bytes[]',
				name: 'condValues',
				internalType: 'bytes[]',
			},
			{
				type: 'bytes[]',
				name: 'updateKeys',
				internalType: 'bytes[]',
			},
			{
				type: 'bytes[]',
				name: 'updateValues',
				internalType: 'bytes[]',
			},
			{
				type: 'bytes[]',
				name: 'actions',
				internalType: 'bytes[]',
			},
		],
		outputs: [
			{
				type: 'bool',
				name: '',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'supportsInterface',
		inputs: [
			{
				type: 'bytes4',
				name: 'interfaceId',
				internalType: 'bytes4',
			},
		],
		outputs: [
			{
				type: 'bool',
				name: '',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'toUint32Strict',
		inputs: [
			{
				type: 'bytes',
				name: '_bytes',
				internalType: 'bytes',
			},
		],
		outputs: [
			{
				type: 'uint32',
				name: '',
				internalType: 'uint32',
			},
		],
		stateMutability: 'pure',
	},
	{
		type: 'function',
		name: 'totalRoles',
		inputs: [],
		outputs: [
			{
				type: 'uint256',
				name: '',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'transferOwnership',
		inputs: [
			{
				type: 'address',
				name: 'newOwner',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
];
