import React from 'react';
import RecentTask from '../components/RecentTask';
import { useLoaderData } from 'react-router';
import Hero from '../components/Hero';

const HomePage = () => {

    const taskData = useLoaderData()


    return (
        <div>
             <Hero></Hero>
             <RecentTask taskData={taskData} ></RecentTask>
        </div>
    );
};

export default HomePage;