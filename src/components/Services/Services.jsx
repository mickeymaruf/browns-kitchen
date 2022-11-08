import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData().data;
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-3 pb-20'>
            {
                services.map(service => <ServiceCard key={service._id} service={service} />)
            }
        </div>
    );
};

export default Services;