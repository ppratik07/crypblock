import { useState } from 'react';
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
            localStorage.setItem('passwordSet','true');
            navigate("/recoveryphase");
        }
    };

    return (
        <div className="p-4 md:p-8 lg:p-12 flex flex-col md:flex-row">
           <div className="flex-1 flex flex-col items-center md:items-start">
                <div className='mb-4'><BackIcon /></div>
                <div className="text-center md:text-left">
                    <div className="text-2xl md:text-4xl font-bold mb-2">
                        Choose a Password
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-gray-300">
                        You will use it to unlock your <br /> wallet.
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start mt-8 space-y-6 w-full max-w-sm">
                    <div className="relative h-10 w-full">
                        <input
                            type="password"
                            placeholder="Choose Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="peer h-full w-full rounded-lg border border-gray-300 bg-transparent bg-white px-3 py-2.5 text-sm font-normal text-gray-700 shadow-sm placeholder:text-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </div>
                    <div className="relative h-10 w-full">
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="peer h-full w-full rounded-lg border border-gray-300 bg-transparent bg-white px-3 py-2.5 text-sm font-normal text-gray-700 shadow-sm placeholder:text-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <button 
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className="w-px bg-gray-300 mx-0 md:mx-8 my-8 md:my-0"></div>

            <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-5">
                <div className='mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div className="text-sm md:text-lg text-gray-700 mt-4 text-center md:text-left">
                    <p>
                        For your protection, the password is stored securely on your device. We will not be able to recover it for you, so make sure you remember it.
                    </p>
                </div>
            </div>
        </div>
    );
};
