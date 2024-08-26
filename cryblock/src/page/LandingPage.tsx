import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { LoadingScreen } from '../components/LoadingScreen';

export const LandingPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('Generating wallet...');
  const navigate = useNavigate();
  const { connect, disconnect, connected, wallet, select } = useWallet();
  const { setVisible } = useWalletModal();

  useEffect(() => {
    if (connected) {
      handleWalletConnected();
    }
  }, [connected]);

  const handleCreateWallet = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setMessage('Wallet generated!');
      setTimeout(() => {
        navigate('/password');
      }, 1000);
    }, 2000);
  };

  const handleImportWallet = () => {
    setVisible(true);
  };

  const handleWalletConnected = () => {
    console.log('Wallet connected:', wallet?.adapter.name);
    navigate('/solanawallet');
  };

  if (isGenerating) {
    return <LoadingScreen message={message} />;
  }

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col items-center pt-12 md:pt-24 text-2xl md:text-4xl font-bold">
        <div>Welcome to CryBlock</div>
        <div className="pt-2 text-lg md:text-2xl font-semibold text-gray-400">
          Your favourite wallet to store crypto and blockchains.
        </div>
      </div>
      <div className="pt-10 md:pt-20 text-xl text-gray-400 font-semibold text-center">
        Choose how you would like to configure your wallet:
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <div
          className="w-full md:w-56 p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200 relative overflow-hidden transition-colors duration-300 hover:bg-green-200"
          onClick={handleCreateWallet}
          style={{ cursor: 'pointer' }}
        >
          <div className="absolute inset-0 bg-green-200 opacity-0 transition-opacity duration-300 hover:opacity-100 z-10"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 md:mb-8 relative z-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-black relative z-20">
            Create New Wallet
          </h5>
        </div>

        <div
          className="w-full md:w-56 p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200 relative overflow-hidden transition-colors duration-300 hover:bg-blue-200"
          onClick={handleImportWallet}
          style={{ cursor: 'pointer' }}
        >
          <div className="absolute inset-0 bg-blue-400 opacity-0 transition-opacity duration-300 hover:opacity-100 z-10"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 md:mb-8 relative z-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
          </svg>
          <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-black relative z-20">
            Import Wallet
          </h5>
        </div>
      </div>
    </div>
  );
};
