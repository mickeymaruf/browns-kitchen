import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Spinner from '../Others/Spinner';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.data);
                setSpinner(false);
            })
    }, [])
    return (
        <>
            {
                spinner ?
                    <div className='pt-40 pb-48 flex justify-center'>
                        <Spinner />
                    </div>
                    :
                    <div className='w-10/12 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-3 pb-20'>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service} />)
                        }
                    </div>
            }
        </>
    );
};

export default Services;