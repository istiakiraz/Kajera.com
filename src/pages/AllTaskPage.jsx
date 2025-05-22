import React from 'react';
import { useLoaderData } from 'react-router';
import AllTasksCard from '../components/AllTasksCard';

const AllTaskPage = () => {

    const tasksData = useLoaderData()
    console.log(tasksData);


    return (
        
        <div className='py-10'>
            <h1 className='text-4xl text-purple-500 font-bold text-center py-8'>All task</h1>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  w-11/12 lg:w-8/12 mx-auto gap-5">
                {
                    tasksData.map(task=> <AllTasksCard task={task} key={task._id}></AllTasksCard>)
                }
            </div>

        </div>
    );
};

export default AllTaskPage;