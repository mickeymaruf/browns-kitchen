import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const dishes = useLoaderData().data;
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                dishes.map(dish => <ServiceCard key={dish._id} dish={dish} />)
            }
        </div>
    );
};

export default Services;