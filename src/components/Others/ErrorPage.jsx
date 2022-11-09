import React from 'react';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('404');
    return (
        <div className='h-screen flex justify-center items-center'>
            <h1 className='text-5xl'>404 Error Not Found!</h1>
        </div>
    );
};

export default ErrorPage;