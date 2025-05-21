import React from 'react';
import { useLoaderData } from 'react-router';
import AllTasksCard from '../components/AllTasksCard';

// import { Typewriter } from 'react-simple-typewriter';
// import demo from '../assets/demo.json'
// import Lottie from 'lottie-react';

const AllTaskPage = () => {

    const tasksData = useLoaderData()
    console.log(tasksData);


    return (
        
        <div className='py-10'>
            <h1 className='text-4xl text-purple-500 font-bold text-center py-8'>All task</h1>

            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  w-11/12 lg:w-8/12 mx-auto gap-5">
                {
                    tasksData.map(task=> <AllTasksCard task={task} key={task._id}></AllTasksCard>)
                }
            </div>

        </div>



        // <div className='text-red-700 text-4xl'>
        //      <Typewriter  words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        //      loop={100}
        //     cursor
        //     cursorStyle='_'
        //     typeSpeed={70}
        //     deleteSpeed={50}
        //     delaySpeed={1000}
            
        //     />

        //    <Lottie className='w-96' animationData={demo} />
        // </div>
    );
};

export default AllTaskPage;