import { BackIcon } from "../components/BackIcon"

export const RecoveryPhase = () => {
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                        <p>The recovery phase alone gives you full access to your wallets and funds.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center">
                        <span className="mr-2 -mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                            </svg>

                        </span>
                        <p>If you forget your password, you can use the recovery phase to get back into your wallet.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center font-bold">
                        <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
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
                <div className='mt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div className="text-lg text-gray-700 mt-8">
                    <p>
                        For your protection,the password is stored securely on your device. We will not be able to recover it for you, so make sure you remember it.
                    </p>
                </div>
            </div>
        </div>
    )

}