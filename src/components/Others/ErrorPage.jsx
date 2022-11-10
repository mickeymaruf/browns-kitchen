import React from 'react';
import useTitle from '../../hooks/useTitle';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useTitle('404');
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-9xl font-medium'>404</h1>
                <h3 className='text-5xl md:text-6xl mb-2 font-thin'>Page Not Found!</h3>
                <p className='text-sm md:text-lg text-gray-400'>We're sorry but the page you requested could not be found<br /> Please go back to the homepage</p>
                <Link to='/'><BiArrowBack className="w-12 h-12 mx-auto mt-2 cursor-pointer" /></Link>
            </div>
        </div>
    );
};

export default ErrorPage;