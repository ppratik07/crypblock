import React, { useState } from 'react';
import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { Keypair, PublicKey, Connection } from '@solana/web3.js';
import nacl from 'tweetnacl';

interface SolanaWalletProps {
    mnemonic: string;
}

interface WalletDetails {
    publicKey: string;
    privateKey: string;
    balance: number;
    accountName: string;
}

export const WalletView: React.FC<SolanaWalletProps> = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [wallets, setWallets] = useState<WalletDetails[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<number | null>(null);

    const connection = new Connection('https://api.devnet.solana.com');

    const addWallet = async () => {
        const seed: Buffer = await mnemonicToSeed(mnemonic); 
        const seedHex: string = seed.toString("hex");
        const path: string = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed: Buffer = derivePath(path, seedHex).key;
        const secret: Uint8Array = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair: Keypair = Keypair.fromSecretKey(secret);

        // Fetch the balance
        const balanceLamports = await connection.getBalance(keypair.publicKey);
        const balanceSOL = balanceLamports / 1e9; // Convert lamports to SOL

        const walletDetails: WalletDetails = {
            publicKey: keypair.publicKey.toString(),
            privateKey: Buffer.from(keypair.secretKey).toString('hex'),
            balance: balanceSOL,
            accountName: `Wallet ${currentIndex + 1}`,
        };

        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, walletDetails]);
    };

    const handleWalletSelection = (index: number) => {
        setSelectedWallet(index);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-800 rounded-xl shadow-md space-y-4 text-white">
            <h2 className="text-xl font-bold">Solana Wallets</h2>

            <button
                onClick={addWallet}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Create Wallet
            </button>

            {wallets.length > 0 && (
                <div>
                    <label className="block font-medium mb-2">Select Wallet:</label>
                    <select
                        className="bg-gray-700 text-white p-2 rounded w-full"
                        onChange={(e) => handleWalletSelection(Number(e.target.value))}
                        value={selectedWallet !== null ? selectedWallet : ""}
                    >
                        <option value="" disabled>Select a wallet</option>
                        {wallets.map((wallet, index) => (
                            <option key={index} value={index}>
                                {wallet.accountName}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {selectedWallet !== null && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">{wallets[selectedWallet].accountName}</h3>
                    <div>
                        <label className="block font-medium">Balance: </label>
                        <span className="text-lg">${wallets[selectedWallet].balance.toFixed(6)} SOL</span>
                    </div>
                    <div className="mt-2">
                        <label className="block font-medium">Public Key: </label>
                        <div className="bg-gray-700 p-2 rounded break-all">{wallets[selectedWallet].publicKey}</div>
                    </div>
                    <div className="mt-2">
                        <label className="block font-medium">Private Key: </label>
                        <div className="bg-gray-700 p-2 rounded break-all">{wallets[selectedWallet].privateKey}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WalletView;
