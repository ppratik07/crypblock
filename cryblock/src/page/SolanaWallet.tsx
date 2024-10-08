import { useState, useEffect } from 'react';
import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { Keypair, Connection, Transaction, SystemProgram, PublicKey, SendTransactionError } from '@solana/web3.js';
import nacl from 'tweetnacl';

interface WalletDetails {
    publicKey: string;
    privateKey: string;
    balance: number;
    accountName: string;
}

export const SolanaWallet = ({ mnemonic }: any) => {
    const [wallets, setWallets] = useState<WalletDetails[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<number | null>(null);
    const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);
    const [recipient, setRecipient] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const connection = new Connection('https://api.testnet.solana.com');

    useEffect(() => {
        const savedWallets = sessionStorage.getItem('wallets');
        const savedTime = sessionStorage.getItem('walletsSavedTime');

        if (savedWallets && savedTime) {
            const currentTime = new Date().getTime();
            const timeElapsed = currentTime - parseInt(savedTime, 10);
            if (timeElapsed <= 900000) { 
                setWallets(JSON.parse(savedWallets));
            } else {
                sessionStorage.removeItem('wallets');
                sessionStorage.removeItem('walletsSavedTime');
            }
        }
    }, []);

    useEffect(() => {
        if (wallets.length > 0) {
            sessionStorage.setItem('wallets', JSON.stringify(wallets));
            sessionStorage.setItem('walletsSavedTime', new Date().getTime().toString());
        }
    }, [wallets]);

    const addWallet = async () => {
        const walletIndex = wallets.length;
        const seed: Buffer = await mnemonicToSeed(mnemonic);
        const seedHex: string = seed.toString("hex");
        const path: string = `m/44'/501'/${walletIndex}'/0'`;
        const derivedSeed: Buffer = derivePath(path, seedHex).key;
        const secret: Uint8Array = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair: Keypair = Keypair.fromSecretKey(secret);

        const balanceLamports = await connection.getBalance(keypair.publicKey);
        const balanceSOL = balanceLamports / 1e9;

        const walletDetails: WalletDetails = {
            publicKey: keypair.publicKey.toString(),
            privateKey: Buffer.from(keypair.secretKey).toString('hex'),
            balance: balanceSOL,
            accountName: `Wallet ${walletIndex + 1}`,
        };

        setWallets([...wallets, walletDetails]);
        setSelectedWallet(wallets.length);
    };

    const handleWalletSelection = (index: number) => {
        setSelectedWallet(index);
        setShowPrivateKey(false);
        setRecipient('');
        setAmount(0); 
    };

    const removeWallet = () => {
        if (selectedWallet !== null) {
            const confirmation = window.confirm("Are you sure you want to remove this wallet?");
            if (confirmation) {
                const updatedWallets = wallets.filter((_, index) => index !== selectedWallet);
                setWallets(updatedWallets);

                if (updatedWallets.length === 0) {
                    setSelectedWallet(null);
                    sessionStorage.removeItem('wallets');
                    sessionStorage.removeItem('walletsSavedTime');
                } else if (selectedWallet >= updatedWallets.length) {
                    setSelectedWallet(updatedWallets.length - 1);
                } else {
                    setSelectedWallet(null);
                }
            }
        }
    };

    const sendFunds = async () => {
        if (selectedWallet === null || recipient === '' || amount <= 0) {
            alert("Please select a wallet, enter a recipient address, and specify an amount.");
            return;
        }
        setLoading(true);
        const senderWallet = wallets[selectedWallet];
        const senderKeypair = Keypair.fromSecretKey(Buffer.from(senderWallet.privateKey, 'hex'));
    
        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: senderKeypair.publicKey,
                    toPubkey: new PublicKey(recipient),
                    lamports: amount * 1e9,
                })
            );
    
            const signature = await connection.sendTransaction(transaction, [senderKeypair], { skipPreflight: false });
            await connection.confirmTransaction(signature, 'confirmed');
    
            alert("Transaction successful!");
            await updateWalletBalances(senderWallet.publicKey, recipient);
    
        } catch (error) {
            if (error instanceof SendTransactionError) {
                console.error("Transaction failed:", error);
                console.log("Transaction logs:", await error.getLogs(connection));
            } else {
                console.error("Unexpected error:", error);
            }
            alert("Transaction failed.");
        }
        finally {
            setLoading(false);
        }
    };
    

    const updateWalletBalances = async (senderPubKey: string, recipientPubKey: string) => {
        const updatedWallets = await Promise.all(wallets.map(async (wallet) => {
            const publicKey = new PublicKey(wallet.publicKey);
            const balanceLamports = await connection.getBalance(publicKey);
            const balanceSOL = balanceLamports / 1e9;
    
            return {
                ...wallet,
                balance: balanceSOL,
            };
        }));
    
        setWallets(updatedWallets);
    
       
        const senderPublicKey = new PublicKey(senderPubKey);
        const senderBalanceLamports = await connection.getBalance(senderPublicKey);
        const senderBalanceSOL = senderBalanceLamports / 1e9;
        console.log(`Sender balance after transaction: ${senderBalanceSOL} SOL`);
    
        
        if (!wallets.some(wallet => wallet.publicKey === recipientPubKey)) {
            const recipientPublicKey = new PublicKey(recipientPubKey);
            const recipientBalanceLamports = await connection.getBalance(recipientPublicKey);
            const recipientBalanceSOL = recipientBalanceLamports / 1e9;
            console.log(`Recipient balance: ${recipientBalanceSOL} SOL`);
        }
    };
    
    

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-300 rounded-xl shadow-md space-y-4 text-white">
            <h2 className="text-xl font-bold text-black">Solana Wallets</h2>

            <button
                onClick={addWallet}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Create Wallet
            </button>

            {wallets.length > 0 && (
                <div>
                    <label className="block font-medium mb-2 text-black">Select Wallet:</label>
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
                    <h3 className="text-lg font-semibold text-red-800">{wallets[selectedWallet].accountName}</h3>
                    <div>
                        <label className="block font-medium text-black">Balance: </label>
                        <span className="text-lg font-bold text-blue-600">${wallets[selectedWallet].balance.toFixed(6)} SOL</span>
                    </div>
                    <div className="mt-2">
                        <label className="block font-medium text-black">Public Key: </label>
                        <div className="bg-gray-700 p-2 rounded break-all">{wallets[selectedWallet].publicKey}</div>
                    </div>
                    <div className="mt-2">
                        <label className="block font-medium text-black">Private Key: </label>
                        <div className="flex items-center">
                            <div
                                className={`bg-gray-700 p-2 rounded break-all ${!showPrivateKey ? 'blur-sm' : ''}`}
                            >
                                {wallets[selectedWallet].privateKey}
                            </div>
                            <button
                                onClick={() => setShowPrivateKey(!showPrivateKey)}
                                className="ml-2 text-gray-900"
                            >
                                {showPrivateKey ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7 0c0 1.657-2.686 5-7 5s-7-3.343-7-5 2.686-5 7-5 7 3.343 7 5z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A9.956 9.956 0 0112 19c-4.418 0-8-2.686-8-5a9.956 9.956 0 011.875-5.825m8 8.65A5.996 5.996 0 0018 12c0-2.121-2.032-4-4-4a5.996 5.996 0 00-4.875 2.175m.75 7.65L3 21l9-12.75m1.125 13.575A9.956 9.956 0 0012 5c4.418 0 8 2.686 8 5 0 1.138-.69 2.177-1.825 3.275M5 9a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-black">Recipient Address:</label>
                        <input
                            type="text"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="bg-gray-700 text-white p-2 rounded w-full"
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block font-medium text-black">Amount (in SOL):</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="bg-gray-700 text-white p-2 rounded w-full"
                        />
                    </div>
                    <button
                        onClick={sendFunds}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0112.142-6.142L12 5V1a1 1 0 00-2 0v4a1 1 0 00.293.707L14.707 7.293A8 8 0 014 12z"></path>
                                </svg>
                                Sending...
                            </div>
                        ) : (
                            'Send Funds'
                        )}
                    </button>
                </div>
            )}

            {wallets.length > 0 && (
                <button
                    onClick={removeWallet}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Remove Wallet
                </button>
            )}
        </div>
    );
};