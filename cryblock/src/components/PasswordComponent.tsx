export const PasswordComponent = () => {
    return (
        <div className="mt-20 ml-5 flex items-start">
            <div className="back-button mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
            </div>
            <div className="flex flex-col">
                <div className="text-4xl font-bold mt-10">
                    Choose a Password
                </div>
                <div className="text-4xl flex font-bold text-gray-300 mt-3 items-start flex-col">
                    You will use it to unlock your <br /> wallet.
                </div>
            </div>
            <div>
                <div className="w-72 flex-col mt-56 -ml-96">
                    <div className="relative h-10 w-full min-w-[200px] ">
                        <input type="email" placeholder="Choose Password"
                            className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                </div>
                <div className="w-72 flex-col mt-10 -ml-96">
                    <div className="relative h-10 w-full min-w-[200px] ">
                        <input type="email" placeholder="Re-enter Password"
                            className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                </div>
            </div>
        </div>

    )
}