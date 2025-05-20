import React from 'react';
import RecentTask from '../components/RecentTask';
import { useLoaderData } from 'react-router';

const HomePage = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
             HomePage
             <RecentTask></RecentTask>
        </div>
    );
};

export default HomePage;