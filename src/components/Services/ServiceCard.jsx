import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, image, is_new, price, desc } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className=' object-cover' src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body p-5">
                <h2 className="card-title">
                    {name}
                    {
                        is_new &&
                        <div className="badge bg-orange-500 text-white border-0">NEW</div>
                    }
                </h2>
                <p className='text-lg'>Price: ${price}</p>
                <small>{desc.length > 100 ? desc.slice(0, 100) + '...' : desc}</small>
                <Link to={`/services/${_id}`}><button className='btn btn-theme w-full mt-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;