export const LandingPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center pt-24 text-4xl font-bold">
                Welcome to CryBlock
            </div>
            <div className="pt-3 text-4xl font-semibold text-gray-400">
                Your favourite wallet to store crypto and blockchains.
            </div>
            <div className="pt-40 mr-96 text-xl text-gray-400 font-semibold">
                Choose how you would like to configure you wallet :
            </div>
            <div className="pt-10 ml-20">
                <div className="max-w-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Create New Wallet</h5>
                    </a>
                </div>
            </div>


        </div>

    )
}