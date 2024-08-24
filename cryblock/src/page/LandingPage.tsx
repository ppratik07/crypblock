import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingScreen } from '../components/LoadingScreen'; // Import the LoadingScreen component

export const LandingPage = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [message, setMessage] = useState('Generating wallet...');
    const navigate = useNavigate();

    const handleCreateWallet = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setMessage('Wallet generated!');
            setTimeout(() => {
                navigate('/password');
            }, 1000); 
        }, 2000);
    };

    if (isGenerating) {
        return <LoadingScreen message={message} />; 
    }

    return (
        <div>
            <div className="flex items-center justify-center pt-24 text-4xl font-bold">
                Welcome to CryBlock
            </div>
            <div className="pt-3 text-4xl font-semibold text-gray-400">
                Your favourite wallet to store crypto and blockchains.
            </div>
            <div className="pt-40 mr-96 text-xl text-gray-400 font-semibold">
                Choose how you would like to configure your wallet:
            </div>
            <div className="pt-10 ml-48">
                <div 
                    className="max-w-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200 relative overflow-hidden transition-colors duration-300 hover:bg-green-200"
                    onClick={handleCreateWallet}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="absolute inset-0 bg-green-200 opacity-0 transition-opacity duration-300 hover:opacity-100 z-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-8 relative z-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black relative z-20">
                        Create New Wallet
                    </h5>
                </div>

                <div className="flex justify-center -mt-36 mr-72">
                    <div className="max-w-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200 relative overflow-hidden transition-colors duration-300 hover:bg-green-200">
                        <div className="absolute inset-0 bg-blue-400 opacity-0 transition-opacity duration-300 hover:opacity-100 z-10"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-8 relative z-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black relative z-20">Import Wallet</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
