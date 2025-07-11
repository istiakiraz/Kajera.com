import React from 'react';
import RecentTask from '../components/RecentTask';
import { useLoaderData } from 'react-router';
import Hero from '../components/Hero';
import Add from '../components/Add';
import Join from '../components/Join';
import AddTwo from '../components/AddTwo';
import Countup from '../components/Countup';

const HomePage = () => {

    const taskData = useLoaderData()


    return (
        <div>
             <Hero></Hero>
             <Countup></Countup>
             <RecentTask taskData={taskData} ></RecentTask>
             <AddTwo></AddTwo>
             <Join></Join>             
             <Add></Add>
        </div>
    );
};

export default HomePage;