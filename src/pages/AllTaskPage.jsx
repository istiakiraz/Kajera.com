import React from 'react';
import { useLoaderData } from 'react-router';
import AllTasksCard from '../components/AllTasksCard';


const AllTaskPage = () => {

    const tasksData = useLoaderData()
    console.log(tasksData);


    return (
        
        <div className='py-10'>
            <div className='text-center w-11/12 mx-auto mb-8 py-8'>
                <h1 className='text-4xl  mb-4 font-medium w-fit mx-auto  bg-[#88af2b]/20 py-2 px-4  '>See All Available Tasks</h1>
                <p>Explore a wide range of tasks posted by real clients. Filter by category, budget, and deadline to find your perfect match.</p>

            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  w-11/12 lg:w-8/12 mx-auto gap-5">
                {
                    tasksData.map(task=> <AllTasksCard task={task} key={task._id}></AllTasksCard>)
                }
            </div>

        </div>
    );
};

export default AllTaskPage;