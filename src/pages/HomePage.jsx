import React from 'react';
import RecentTask from '../components/RecentTask';
import { useLoaderData } from 'react-router';

const HomePage = () => {

    const taskData = useLoaderData()


    return (
        <div>
             HomePage
             <RecentTask taskData={taskData} ></RecentTask>
        </div>
    );
};

export default HomePage;