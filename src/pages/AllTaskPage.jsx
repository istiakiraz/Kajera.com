import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import demo from '../assets/demo.json'
import Lottie from 'lottie-react';

const AllTaskPage = () => {

 

    return (
        <div className='text-red-700 text-4xl'>
             <Typewriter  words={['Eat', 'Sleep', 'Code', 'Repeat!']}
             loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            />

           <Lottie className='w-96' animationData={demo} />
        </div>
    );
};

export default AllTaskPage;