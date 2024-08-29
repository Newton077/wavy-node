"use client"

import Image from "next/image";
import { useState } from "react";
import { ethers } from "ethers";  

export default function Home() {

  const [actualBlock, setActualBlock] = useState(0);
  const [block, setBlock] = useState(0);
  const [inputBlock, setInputBlock] = useState(null);



  let smartContractAddress = "0x84443CFd09A48AF6eF360C6976C5392aC5023a1F";

  let smartContractAbi = [
    {
      "inputs": [
        {
          "internalType": "contract IVerifier",
          "name": "_verifier",
          "type": "address"
        },
        {
          "internalType": "contract IHasher",
          "name": "_hasher",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_denomination",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "_merkleTreeHeight",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "commitment",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "leafIndex",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nullifierHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "relayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "FIELD_SIZE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ROOT_HISTORY_SIZE",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ZERO_VALUE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "commitments",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentRootIndex",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "denomination",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_commitment",
          "type": "bytes32"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
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
      "name": "filledSubtrees",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLastRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IHasher",
          "name": "_hasher",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_left",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_right",
          "type": "bytes32"
        }
      ],
      "name": "hashLeftRight",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hasher",
      "outputs": [
        {
          "internalType": "contract IHasher",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_root",
          "type": "bytes32"
        }
      ],
      "name": "isKnownRoot",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_nullifierHash",
          "type": "bytes32"
        }
      ],
      "name": "isSpent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_nullifierHashes",
          "type": "bytes32[]"
        }
      ],
      "name": "isSpentArray",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "spent",
          "type": "bool[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "levels",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextIndex",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "nullifierHashes",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "roots",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "verifier",
      "outputs": [
        {
          "internalType": "contract IVerifier",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        },
        {
          "internalType": "bytes32",
          "name": "_root",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_nullifierHash",
          "type": "bytes32"
        },
        {
          "internalType": "address payable",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_relayer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_refund",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
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
      "name": "zeros",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  let provider = new ethers.providers.JsonRpcProvider("https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150");
  let smartContractInstance = new ethers.Contract(smartContractAddress, smartContractAbi, provider);


  async function getActualBlockNumber() 
  {
    let block = await provider.getBlock("latest");
    console.log("actualBlockData");
    console.log(block);
    console.log("actualBlockNumber");
    console.log(block.number);

    setActualBlock(block.number);
  }

  async function setBlockToSearch()
  {
    setBlock(inputBlock);
  }

  async function queryEvents()
  {
    const events = await smartContractInstance.queryFilter("Withdrawal", 231103501, 247744860);

    console.log("txEvents:")
    console.log("Events length: ", events.length);
    console.log(events);


    console.log(events[0].event);
    console.log(events[0].args);
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
        <div>
          <h1>TRACKING</h1>

          <h1>actualBlock: {actualBlock}</h1>
        </div>
        
        <div style={{paddingTop: '2rem'}}>
          <div>
            <h2>queryBlock</h2>
            <input type="number" placeholder="blockToQuery" onChange={e => setInputBlock(e.target.value)}></input>
            <button onClick={setBlockToSearch}>SET</button>
          </div>

          <div style={{paddingTop: '3rem'}}>
            <button onClick={queryEvents}>QUERY</button>
          </div>

          <div style={{paddingTop: '4rem'}}>
            <h2>Block: {block}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
