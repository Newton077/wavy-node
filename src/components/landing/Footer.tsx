"use client";

import Link from "next/link";
import { Twitter, Github, MessageCircle } from "lucide-react";
import React, { useState } from 'react';
import { ethers } from 'ethers';
import WalletPopup from '../WalletPopup';
import { PushAPI } from '@pushprotocol/restapi';
import PushHelpChannel from './PushHelpChannel'; // Import the PushHelpChannel component

interface WalletInfo {
  provider: ethers.providers.Web3Provider;
  signer: ethers.Signer;
  address: string;
  network: {
    name: string;
    chainId: number;
  };
}

export default function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);

  const handleConnect = (connectionInfo: WalletInfo) => {
    setWalletInfo(connectionInfo);
    console.log('Connected wallet:', connectionInfo.address);
    console.log('Network:', connectionInfo.network.name);
    console.log('Chain ID:', connectionInfo.network.chainId);
  };

  return (
    <footer className="bg-[#F8FAFC] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="text-[#64748B] transition-colors hover:text-[#1A2E44]"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <Link
            href="#"
            className="text-[#64748B] transition-colors hover:text-[#1A2E44]"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>

          <div style={{position: 'relative', zIndex: 1000}}>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {walletInfo ? 'Wallet Connected' : 'Connect Wallet'}
            </button>

            {walletInfo && (
              <div className="mt-4 space-y-2">
                <p>Connected Address: {walletInfo.address}</p>
                <p>Network Name: {walletInfo.network.name}</p>
                <p>Chain ID: {walletInfo.network.chainId}</p>
              </div>
            )}

            <WalletPopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              onConnect={handleConnect}
            />
          </div>

          <div style={{position: 'relative', zIndex: 1000}}>
            {walletInfo && (
              <>
                <button
                  onClick={() => setIsHelpOpen(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Help Channel
                </button>

                <PushHelpChannel
                  isOpen={isHelpOpen}
                  onClose={() => setIsHelpOpen(false)}
                  address={walletInfo.address}
                />
              </>
            )}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#64748B] sm:mt-6 sm:text-sm">
          &copy; 2023 Wavy Node. All rights reserved.
        </p>
      </div>
    </footer>
  );
}