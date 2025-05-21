import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {

    const task =useLoaderData()
    console.log(task);

    if(!task.name){
        return <p>error</p>
    }

    return (
        <div className='lg:w-9/12 mx-auto w-11/12 py-10 '>
            <h1 className='text-5xl text-blue-700 font-bold text-center py-8'>task details </h1>
            <div className='w-11/12 mx-auto flex lg:flex-row flex-col bg-cyan-300/20 items-center gap-10 justify-between px-10 py-8 border border-amber-100 rounded-2xl '>
                <img src={task.photo} alt={task.title} />

                <div className=' mx-auto'>
                    <h1 className='text-2xl text-indigo-700'>{task.title}</h1>
                    <h2 className='text-blue-950 w-10/12 text-sm '>{task.description}</h2>

                </div>
            </div>
            
        </div>
    );
};

export default TaskDetails;