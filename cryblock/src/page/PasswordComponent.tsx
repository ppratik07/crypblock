import React, { useState } from 'react';
import { BackIcon } from "../components/BackIcon";
import { useNavigate } from 'react-router-dom';

export const PasswordComponent = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage('');
            console.log("Passwords match");
            navigate("/recoveryphase");
        }
    };

    return (
        <div className="mt-20 flex">
            <div className="flex-1 ml-5 flex flex-col items-center">
                <BackIcon />
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                        Choose a Password
                    </div>
                    <div className="text-4xl font-bold text-gray-300">
                        You will use it to unlock your <br /> wallet.
                    </div>
                </div>

                <div className="flex flex-col items-center mt-8 space-y-6">
                    <div className="relative h-10 w-full max-w-xs">
                        <input
                            type="password"
                            placeholder="Choose Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 placeholder:text-gray-500 focus:border-2 focus:border-gray-900 focus:outline-0 focus:ring-gray-900/10"
                        />
                    </div>
                    <div className="relative h-10 w-full max-w-xs">
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 placeholder:text-gray-500 focus:border-2 focus:border-gray-900 focus:outline-0 focus:ring-gray-900/10"
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <button 
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full ml-1"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className="w-px bg-gray-300 mx-8"></div>

            <div className="flex-1 px-5">
                <div className='mt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div className="text-lg text-gray-700 mt-8">
                    <p>
                        For your protection, the password is stored securely on your device. We will not be able to recover it for you, so make sure you remember it.
                    </p>
                </div>
            </div>
        </div>
    );
};
