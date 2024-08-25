import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

interface SolanaWalletProps {
    mnemonic: string;
}

export const SolanaWallet = ({ mnemonic }: SolanaWalletProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [publicKeys, setPublicKeys] = useState<PublicKey[]>([]);

    const addWallet = async () => {
        const seed: Buffer = await mnemonicToSeed(mnemonic); 
        const seedHex: string = seed.toString("hex");
        const path: string = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed: Buffer = derivePath(path, seedHex).key;
        const secret: Uint8Array = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair: Keypair = Keypair.fromSecretKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
    };

    return (
        <div>
            <button onClick={addWallet}>
                Add wallet
            </button>
            {publicKeys.map((p, index) => (
                <div key={index}>
                    {p.toBase58()}
                </div>
            ))}
        </div>
    );
}
