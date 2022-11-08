import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../assets/images/banner-removebg-preview.png';
import customer from '../../assets/images/customer.png';

import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const dishes = useLoaderData().data;
    return (
        <div>
            <div className="w-10/12 max-w-screen-xl mx-auto grid grid-cols-2 items-center justify-between pb-20">
                <div>
                    <h1 className="text-6xl font-bold leading-[1.1]">
                        Fastest <br />
                        Delivery &<br />
                        Easy Pickup.
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-theme px-8">Get Started</button>
                </div>
                <div>
                    <img className='w-5/6 ml-auto' src={banner} alt="" />
                </div>
            </div>
            <div className='bg-base-200 mx-auto pt-20'>
                <div className='w-10/12 max-w-screen-xl mx-auto '>
                    <h3 className='text-3xl font-medium mb-5 text-black'>Popular Foods</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            dishes.map(dish => <ServiceCard key={dish._id} dish={dish} />)
                        }
                    </div>
                    <div className='mt-12 flex justify-center'>
                        <Link to="/services"><button className="btn btn-theme">See All</button></Link>
                    </div>
                </div>
                <div className='w-10/12 max-w-screen-xl mx-auto pt-20'>
                    <h2 className='text-3xl font-medium text-center mb-10 text-black'>How it works</h2>
                    <div className='grid grid-cols-3 gap-10 text-center'>
                        <div className='bg-base-100 p-5 py-8 rounded-t-[50px]'>
                            <img className='mx-auto' src="https://img.icons8.com/bubbles/50/null/brunette-girl-phone-call.png" alt='' />
                            <h4 className='text-lg font-medium my-1'>Order via website</h4>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto? Impedit sapiente pariatur deleniti quod necessitatibus aperiam.</small>
                        </div>
                        <div className='bg-base-100 p-5 py-8 rounded-t-[50px]'>
                            <img className='mx-auto' src="https://img.icons8.com/bubbles/50/null/steak.png" alt='' />
                            <h4 className='text-lg font-medium my-1'>Choose your food</h4>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto? Impedit sapiente pariatur deleniti quod necessitatibus aperiam.</small>
                        </div>
                        <div className='bg-base-100 p-5 py-8 rounded-t-[50px]'>
                            <img className='mx-auto' src="https://img.icons8.com/bubbles/50/null/person-laying-down.png" alt='' />
                            <h4 className='text-lg font-medium my-1'>Enjoy</h4>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto? Impedit sapiente pariatur deleniti quod necessitatibus aperiam.</small>
                        </div>
                    </div>
                </div>
                <div className='bg-base-100 mt-20 py-10'>
                    <div className='w-10/12 max-w-screen-xl mx-auto flex justify-between items-center'>
                        <div className='flex-1'>
                            <img className='w-10/12' src={customer} alt="" />
                        </div>
                        <div className='flex-1 grid grid-cols-2 gap-8'>
                            <h3 className='text-4xl font-bold'>
                                Service <br /> shows good <br /> taste.
                            </h3>
                            <div className='bg-base-100 p-10 flex items-center gap-5 justify-center shadow-md rounded-xl'>
                                <h1 className='text-5xl font-bold text-orange-500'>976</h1>
                                <p className='text-gray-500'>Satisfied <br /> Customer</p>
                            </div>
                            <div className='bg-base-100 p-10 flex items-center gap-5 justify-center shadow-md rounded-xl'>
                                <h1 className='text-5xl font-bold text-orange-500'>976</h1>
                                <p className='text-gray-500'>Satisfied <br /> Customer</p>
                            </div>
                            <div className='bg-base-100 p-10 flex items-center gap-5 justify-center shadow-md rounded-xl'>
                                <h1 className='text-5xl font-bold text-orange-500'>976</h1>
                                <p className='text-gray-500'>Satisfied <br /> Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;