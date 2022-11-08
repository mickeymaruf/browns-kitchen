import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ dish }) => {
    const { _id, name, image, price, desc } = dish;
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-orange-500 text-white border-0">NEW</div>
                </h2>
                <p>Price: ${price}</p>
                <small>${desc}</small>
                <Link to={`/services/${_id}`}><button className='btn btn-theme'>Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;