import Lottie from 'lottie-react';
import React from 'react';
import load from '../../public/loading.json'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center mx-auto'>
            <Lottie className='w-96' animationData={load} />
        </div>
    );
};

export default Loading;