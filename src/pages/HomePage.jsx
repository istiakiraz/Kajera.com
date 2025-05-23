import React from 'react';
import RecentTask from '../components/RecentTask';
import { useLoaderData } from 'react-router';
import Hero from '../components/Hero';
import Add from '../components/Add';
import Join from '../components/Join';

const HomePage = () => {

    const taskData = useLoaderData()


    return (
        <div>
             <Hero></Hero>
             <RecentTask taskData={taskData} ></RecentTask>
             <Join></Join>
             <Add></Add>
        </div>
    );
};

export default HomePage;