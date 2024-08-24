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
                        <span className="mr-2 -mt-7">&#8226;</span>
                        <p>The recovery phase alone gives you full access to your wallets and funds.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center">
                        <span className="mr-2 -mt-6">&#8226;</span>
                        <p>If you forget your password, you can use the recovery phase to get back into your wallet.</p>
                    </div>
                    <div className="relative h-10 w-full flex items-center font-bold">
                        <span className="mr-2">&#8226;</span>
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