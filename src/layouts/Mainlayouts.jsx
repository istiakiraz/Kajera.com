import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Theme from '../components/Theme';
import { AuthContext } from '../provider/AuthProvider';

const Mainlayouts = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className={` sticky z-50 top-24  h-fit`} ><Theme></Theme></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;