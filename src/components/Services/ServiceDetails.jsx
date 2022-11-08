import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const dish = useLoaderData().data;
    const { _id, name, image, is_new, price, desc } = dish;
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto mb-20'>
            <div className='grid grid-cols-3 items-center gap-10 py-10 mb-10'>
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
            <div>
                <h3 className='text-3xl font-medium text-center mb-5'>Reviews and Ratings</h3>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex gap-5 p-3 rounded-lg'>
                        <img className='rounded-lg w-20 h-20' src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg" alt="" />
                        <div>
                            <h4 className='text-xl font-bold'>Kennington Lane Cafe</h4>
                            <small className='text-gray-500'>Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</small>
                        </div>
                    </div>
                    <div className='flex gap-5 p-3 rounded-lg'>
                        <img className='rounded-lg w-20 h-20' src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg" alt="" />
                        <div>
                            <h4 className='text-xl font-bold'>Kennington Lane Cafe</h4>
                            <small className='text-gray-500'>Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</small>
                        </div>
                    </div>
                    <div className='flex gap-5 p-3 rounded-lg'>
                        <img className='rounded-lg w-20 h-20' src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg" alt="" />
                        <div>
                            <h4 className='text-xl font-bold'>Kennington Lane Cafe</h4>
                            <small className='text-gray-500'>Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</small>
                        </div>
                    </div>
                </div>
                <form className='w-1/2 mt-8'>
                    <textarea className="w-full textarea border-2 h-24 textarea-warning" placeholder="Write a review"></textarea>
                    <button className='btn btn-theme mt-2'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;