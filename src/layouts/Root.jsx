import React from 'react';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;