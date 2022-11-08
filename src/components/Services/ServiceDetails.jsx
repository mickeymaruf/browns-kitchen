import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const dish = useLoaderData().data;
    const { _id, name, image, is_new, price, desc } = dish;
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto grid grid-cols-3 items-center gap-10 py-10'>
            <div className='col-span-1'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure><img className='rounded-2xl' src={image} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='col-span-2'>
                <h2 className='text-5xl text-orange-500 font-bold relative'>
                    {name}
                    {
                        is_new &&
                        <div className="absolute badge bg-orange-500 text-white border-0">NEW</div>
                    }
                </h2>
                <p className='text-3xl font-thin my-3'>Price: ${price}</p>
                <small>{desc}</small>
            </div>
        </div>
    );
};

export default ServiceDetails;