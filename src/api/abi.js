const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_request",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "ChangeRoleOnRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ChangeRoles",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "CommentRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "shopID",
				"type": "uint256"
			}
		],
		"name": "DeleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rate",
				"type": "bool"
			}
		],
		"name": "LeaveLikeDislikeOnComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rate",
				"type": "bool"
			}
		],
		"name": "LeaveLikeDislikeOnRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "changeYourRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "shopId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "createNewShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stars",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "createRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "newAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "polz",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "log",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "password",
				"type": "uint256"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "idShop",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"name": "requestOnChangeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "shopID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "statusClose",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "fullname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentRole",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			},
			{
				"internalType": "bool",
				"name": "ActivechangeRole",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "vhod",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "add",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "pass",
				"type": "bytes32"
			}
		],
		"name": "vhod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vihod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export default ABI