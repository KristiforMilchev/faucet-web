export const BLOCKCERT_CONTRACT = '0x57D84ed12e61BC7DAF00089906d57062c9eFBd80';
export const PRICE_AGGREGATOR = '0xC1f3f3a362c19f72e32e52F7a48E2A4B902544C4';
export const RPC = 'https://rpc.blockcert.net';

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function decimals() view returns (uint8)',
];

export const PRICE_AGGREGATOR_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_priceFeed',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'getRegistrationFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_uniswapRouter',
        type: 'address',
      },
    ],
    name: 'getTokenPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'router',
        type: 'address',
      },
    ],
    name: 'registerToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenRegistrationFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokens',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'contractRouter',
            type: 'address',
          },
        ],
        internalType: 'struct PriceToken[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const BLOCKCERT_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_companyRegister',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_ledger',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_priceFeed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_cvFactory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'account',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'country',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'state',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'city',
            type: 'string',
          },
          {
            internalType: 'address[]',
            name: 'cvs',
            type: 'address[]',
          },
          {
            internalType: 'address[]',
            name: 'companies',
            type: 'address[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'messageHash',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'signature',
                type: 'string',
              },
            ],
            internalType: 'struct WalletData[]',
            name: 'wallets',
            type: 'tuple[]',
          },
          {
            internalType: 'bool',
            name: 'created',
            type: 'bool',
          },
        ],
        internalType: 'struct Account',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'companyName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'jobTitle',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'fromDate',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'toDate',
            type: 'int256',
          },
          {
            internalType: 'bool',
            name: 'verified',
            type: 'bool',
          },
          {
            internalType: 'bytes32',
            name: 'signature',
            type: 'bytes32',
          },
        ],
        internalType: 'struct EmploymentHistory[]',
        name: 'employment',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'level',
            type: 'int256',
          },
        ],
        internalType: 'struct Language[]',
        name: 'languages',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'level',
            type: 'int256',
          },
        ],
        internalType: 'struct Skill[]',
        name: 'skills',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'data',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'link',
            type: 'string',
          },
        ],
        internalType: 'struct Certificate[]',
        name: 'certificates',
        type: 'tuple[]',
      },
    ],
    name: 'createCV',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'network',
            type: 'string',
          },
        ],
        internalType: 'struct Token[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserCVs',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserCompanies',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getUserCompanyById',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getUserCvById',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserWallets',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'messageHash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'signature',
            type: 'string',
          },
        ],
        internalType: 'struct WalletData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'country',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'state',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'city',
        type: 'string',
      },
    ],
    name: 'register',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'wallets',
        type: 'address[]',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'phone',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'category',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'vat',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'crn',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
    ],
    name: 'registerCompany',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'network',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    name: 'registerToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'messageHash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
    ],
    name: 'verifyWallet',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const CV_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_companyRegister',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'ledger',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'wallet',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'companyName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'jobTitle',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'fromDate',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'toDate',
            type: 'int256',
          },
          {
            internalType: 'bool',
            name: 'verified',
            type: 'bool',
          },
          {
            internalType: 'bytes32',
            name: 'signature',
            type: 'bytes32',
          },
        ],
        internalType: 'struct EmploymentHistory[]',
        name: 'employmentHistory',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'level',
            type: 'int256',
          },
        ],
        internalType: 'struct Language[]',
        name: 'languages',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'level',
            type: 'int256',
          },
        ],
        internalType: 'struct Skill[]',
        name: 'skills',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'data',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'link',
            type: 'string',
          },
        ],
        internalType: 'struct Certificate[]',
        name: 'certificates',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Debug',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'message',
        type: 'address',
      },
    ],
    name: 'DebugAddress',
    type: 'event',
  },
  {
    inputs: [],
    name: 'Administrator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: 'signature',
        type: 'bytes32',
      },
    ],
    name: 'ApproveEmploymentDetails',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'Configured',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'EmploymentRequests',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GetGlobalRegisterAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'Owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCv',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'wallet',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'companyName',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'jobTitle',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'description',
                type: 'string',
              },
              {
                internalType: 'int256',
                name: 'fromDate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'toDate',
                type: 'int256',
              },
              {
                internalType: 'bool',
                name: 'verified',
                type: 'bool',
              },
              {
                internalType: 'bytes32',
                name: 'signature',
                type: 'bytes32',
              },
            ],
            internalType: 'struct EmploymentHistory[]',
            name: 'employmentHistory',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'int256',
                name: 'level',
                type: 'int256',
              },
            ],
            internalType: 'struct Language[]',
            name: 'languages',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'int256',
                name: 'level',
                type: 'int256',
              },
            ],
            internalType: 'struct Skill[]',
            name: 'skills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'data',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'link',
                type: 'string',
              },
            ],
            internalType: 'struct Certificate[]',
            name: 'certificates',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'from',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'content',
                type: 'string',
              },
            ],
            internalType: 'struct Reference[]',
            name: 'references',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct KYC',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEmploymentHistory',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'companyName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'jobTitle',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'int256',
            name: 'fromDate',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'toDate',
            type: 'int256',
          },
          {
            internalType: 'bool',
            name: 'verified',
            type: 'bool',
          },
          {
            internalType: 'bytes32',
            name: 'signature',
            type: 'bytes32',
          },
        ],
        internalType: 'struct EmploymentHistory[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'personalData',
    outputs: [
      {
        internalType: 'address',
        name: 'wallet',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'companyName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'jobTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'int256',
        name: 'fromDate',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'toDate',
        type: 'int256',
      },
    ],
    name: 'update',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const COMPANY_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'registerAddress',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'wallets',
        type: 'address[]',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'phone',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'vat',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'crn',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'company',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'challenge',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
    ],
    name: 'ChallengeRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'company',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'challenge',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'verifier',
        type: 'address',
      },
    ],
    name: 'ChallengeVerified',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'data',
        type: 'string',
      },
    ],
    name: 'Debug',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'data',
        type: 'bytes32',
      },
    ],
    name: 'Debug32',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'data',
        type: 'address',
      },
    ],
    name: 'DebugAddress',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'Challanges',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addAdministrator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'read',
    outputs: [
      {
        components: [
          {
            internalType: 'address[]',
            name: 'wallets',
            type: 'address[]',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'vatNumber',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'companyAddress',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'country',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'vat',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'crn',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
          },
        ],
        internalType: 'struct Company',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'jobTitle',
        type: 'string',
      },
      {
        internalType: 'int256',
        name: 'fromDate',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'toDate',
        type: 'int256',
      },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
    ],
    name: 'requestVerification',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'challenge',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'signature',
        type: 'bytes32',
      },
    ],
    name: 'verifyChallenge',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
