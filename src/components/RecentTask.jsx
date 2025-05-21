import React from 'react';
import RecentTaskCard from './RecentTaskCard';

const RecentTask = ({taskData}) => {

    return (
        <div className='py-20'>
            <h1 className='text-center mb-8 text-4xl text-cyan-400 '>recent task</h1>
            <div className="grid grid-cols-1  md:grid-cols-3  w-11/12 md:w-8/12 mx-auto gap-5">
                {
                    taskData.map(task=> <RecentTaskCard key={task._id} task={task} ></RecentTaskCard> )
                }
            </div>

        </div>
    );
};

export default RecentTask;