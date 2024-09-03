import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { ethers } from 'ethers';
import TornadoCashIndexerComponent from "./TornadoCashIndexerComponent";
import ReactBorderWrapper from "react-border-wrapper";

function App() {

  return (
    <div>
      <header>
        <h1>tcIndexer</h1>
      </header>

      <body style={{paddingTop: '1rem'}}>
        <h2>CHECK:</h2>
        <ReactBorderWrapper>
          <ReactBorderWrapper>
            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"ETH"} _assetQuantity={"0.1"} scAddress={"0x12d66f87a04a9e220743712ce6d9bb1b5616b8fc"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"ETH"} _assetQuantity={"1"} scAddress={"0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3c2936"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"ETH"} _assetQuantity={"10"} scAddress={"0x910cbd523d972eb0a6f4cae4618ad62622b39dbf"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"ETH"} _assetQuantity={"100"} scAddress={"0xa160cdab225685da1d56aa342ad8841c3b53f291"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>
          </ReactBorderWrapper> 

          <ReactBorderWrapper>
            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"DAI"} _assetQuantity={"100"} scAddress={"0xd4b88df4d29f5cedd6857912842cff3b20c8cfa3"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>

            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"DAI"} _assetQuantity={"1000"} scAddress={"0xfd8610d20aa15b7b2e3be39b396a1bc3516c7144"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>

            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"DAI"} _assetQuantity={"10000"} scAddress={"0x07687e702b410Fa43f4cB4Af7FA097918ffD2730"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>

            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"DAI"} _assetQuantity={"100000"} scAddress={"0x23773E65ed146A459791799d01336DB287f25334"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>
          </ReactBorderWrapper>

          <ReactBorderWrapper>
            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"USDC"} _assetQuantity={"100"} scAddress={"0x4736dCf1b7A3d580672CcE6E7c65cd5cc9cFBa9D"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>

            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"USDC"} _assetQuantity={"1000"} scAddress={"0xd96f2B1c14Db8458374d9Aca76E26c3D18364307"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>
          </ReactBorderWrapper>

          <ReactBorderWrapper>
            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"USDT"} _assetQuantity={"100"} scAddress={"0x169AD27A470D064DEDE56a2D3ff727986b15D52B"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>

            <ReactBorderWrapper>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"USDT"} _assetQuantity={"1000"} scAddress={"0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </ReactBorderWrapper>
          </ReactBorderWrapper>

          <ReactBorderWrapper>
            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"WBTC"} _assetQuantity={"0.1"} scAddress={"0x178169B423a011fff22B9e3F3abeA13414dDD0F1"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"WBTC"} _assetQuantity={"1"} scAddress={"	0x610B717796ad172B316836AC95a2ffad065CeaB4"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"ethereumMainnet"} _assetName={"WBTC"} _assetQuantity={"10"} scAddress={"0xbB93e510BbCD0B7beb5A853875f9eC60275CF498"} rpcUrl={"https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>
          </ReactBorderWrapper> 
        </ReactBorderWrapper>

        <ReactBorderWrapper>
          <ReactBorderWrapper>
            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"arbitrumMainnet"} _assetName={"ETH"} _assetQuantity={"0.1"} scAddress={"0x84443CFd09A48AF6eF360C6976C5392aC5023a1F"} rpcUrl={"https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"arbitrumMainnet"} _assetName={"ETH"} _assetQuantity={"1"} scAddress={"0xd47438C816c9E7f2E2888E060936a499Af9582b3"} rpcUrl={"https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"arbitrumMainnet"} _assetName={"ETH"} _assetQuantity={"10"} scAddress={"0x330bdFADE01eE9bF63C209Ee33102DD334618e0a"} rpcUrl={"https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"arbitrumMainnet"} _assetName={"ETH"} _assetQuantity={"100"} scAddress={"0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD"} rpcUrl={"https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150"}/>
            </div>
          </ReactBorderWrapper>
        </ReactBorderWrapper>

        <ReactBorderWrapper>
          <ReactBorderWrapper>
            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"optimismMainnet"} _assetName={"ETH"} _assetQuantity={"0.1"} scAddress={"0x84443CFd09A48AF6eF360C6976C5392aC5023a1F"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"optimismMainnet"} _assetName={"ETH"} _assetQuantity={"1"} scAddress={"0xd47438C816c9E7f2E2888E060936a499Af9582b3"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"optimismMainnet"} _assetName={"ETH"} _assetQuantity={"10"} scAddress={"0x330bdFADE01eE9bF63C209Ee33102DD334618e0a"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"optimismMainnet"} _assetName={"ETH"} _assetQuantity={"100"} scAddress={"0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>
          </ReactBorderWrapper>
        </ReactBorderWrapper>

        <ReactBorderWrapper>
          <ReactBorderWrapper>
            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"binanceSmartChainMainnet"} _assetName={"BNB"} _assetQuantity={"0.1"} scAddress={"0x84443CFd09A48AF6eF360C6976C5392aC5023a1F"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"binanceSmartChainMainnet"} _assetName={"BNB"} _assetQuantity={"1"} scAddress={"0xd47438C816c9E7f2E2888E060936a499Af9582b3"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"binanceSmartChainMainnet"} _assetName={"BNB"} _assetQuantity={"10"} scAddress={"0x330bdFADE01eE9bF63C209Ee33102DD334618e0a"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>

            <div style={{paddingTop: '5rem'}}>
              <TornadoCashIndexerComponent _chainName={"binanceSmartChainMainnet"} _assetName={"BNB"} _assetQuantity={"100"} scAddress={"0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD"} rpcUrl={"https://optimism-mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"}/>
            </div>
          </ReactBorderWrapper>
        </ReactBorderWrapper>
      </body>
    </div>
  ); 
}

export default App;