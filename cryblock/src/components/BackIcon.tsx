export const BackIcon = () => {
    return (
        <div className="back-button mb-6 cursor-pointer">
            <a href="/" className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </div>
    );
};
