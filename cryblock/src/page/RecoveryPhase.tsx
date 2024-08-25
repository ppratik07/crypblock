import { generateMnemonic } from "bip39";
import { BackIcon } from "../components/BackIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecoveryPhase = () => {
    const [mnemonic, setMnemonic] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleGenerateMnemonic = async () => {
        const mn = await generateMnemonic();
        setMnemonic(mn);
    };

    const handleCopyMnemonic = () => {
        if (mnemonic) {
            navigator.clipboard.writeText(mnemonic).then(() => {
                alert('Mnemonic copied to clipboard!');
            });
        }
    };

    return (
        <div className="mt-20 flex">
            <div className="flex-1 ml-5 flex flex-col items-center">
                <BackIcon />
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                        Recovery Phrase
                    </div>
                    <div className="text-4xl font-bold text-gray-300">
                        Read the following, then save the phrase successfully
                    </div>
                </div>

                <div className="flex flex-col items-start mt-12 space-y-6 ml-10">
                    <div className="relative h-10 w-full flex items-center">
                        <span className="mr-2 -mt-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                        <p>The recovery phase alone gives you full access to your wallets and funds.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center">
                        <span className="mr-2 -mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <p>If you forget your password, you can use the recovery phase to get back into your wallet.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center font-bold">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                            </svg>
                        </span>
                        <p className="ml-2">Never share it with anyone and enter it into any form.</p>
                    </div>
                </div>
            </div>

            <div className="w-px bg-gray-300 mx-11"></div>

            <div className="flex-1 px-5">
                <div className='mt-36 font-semibold font-sans'>
                    Please read the information below on the left,<br />then click on the button below :
                </div>
                {mnemonic ? (
                    <div className="text-center text-2xl font-bold mt-10">
                        <div className="flex justify-center items-center">
                            <span className="mr-2">{mnemonic}</span>
                            <button
                                onClick={handleCopyMnemonic}
                                className="ml-4 p-2 bg-gray-500 hover:bg-blue-700 text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4m-4 0H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4m4 0h4m-4 0v16"></path>
                                </svg>
                            </button>
                        </div>
                        <button
                            onClick={handleGenerateMnemonic}
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-3 px-24 rounded-full mt-10 text-xs"
                        >
                            Generate Again
                        </button>
                        <div>
                            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-3 px-24 rounded-full mt-5 text-sm" onClick={()=> navigate('/ready')}>
                                I've Saved the Phrase
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={handleGenerateMnemonic}
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded-full mt-10"
                    >
                        Show Recovery Phrase
                    </button>
                )}

            </div>
        </div>
    );
};
