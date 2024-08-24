import { Hourglass } from 'react-loader-spinner';

export const LoadingScreen = ({ message }:any) => {
    return (
        <div className="flex items-center justify-center h-screen bg-white -mt-10">
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
            <div className="absolute text-3xl font-bold text-gray-900 mt-32">
                {message}
            </div>
        </div>
    );
};
