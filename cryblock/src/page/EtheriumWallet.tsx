import React, { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet, ethers } from "ethers";

interface EthereumWalletProps {
    mnemonic: string;
}

interface EthWalletDetails {
    address: string;
    privateKey: string;
    balance: string;
}

export const EtheriumWallet: React.FC<EthereumWalletProps> = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wallets, setWallets] = useState<EthWalletDetails[]>([]);

    const addWallet = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);

        // Fetch the balance
        const provider = new ethers.JsonRpcProvider(""); // Replace with your provider
        const balance = await provider.getBalance(wallet.address);
        const balanceETH = ethers.formatEther(balance);

        const walletDetails: EthWalletDetails = {
            address: wallet.address,
            privateKey: privateKey,
            balance: balanceETH,
        };

        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, walletDetails]);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-800 rounded-xl shadow-md space-y-4 text-white">
            <h2 className="text-xl font-bold">Ethereum Wallets</h2>

            <button
                onClick={addWallet}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Add ETH Wallet
            </button>

            {wallets.map((wallet, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">Account {index + 1}</h3>
                    <div className="bg-gray-700 p-2 rounded break-all">
                        <label className="block font-medium">Address:</label>
                        {wallet.address}
                    </div>
                    <div className="bg-gray-700 p-2 rounded break-all mt-2">
                        <label className="block font-medium">Private Key:</label>
                        {wallet.privateKey}
                    </div>
                    <div className="bg-gray-700 p-2 rounded break-all mt-2">
                        <label className="block font-medium">Balance:</label>
                        {wallet.balance} ETH
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EtheriumWallet;
