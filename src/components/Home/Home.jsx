import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../assets/images/banner.png';
import customer from '../../assets/images/customer.png';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    useTitle('Home');
    const services = useLoaderData().data;
    return (
        <div>
            <div className="w-10/12 max-w-screen-xl mx-auto grid grid-cols-2 items-center justify-between pb-20">
                <div>
                    <h1 className="text-6xl font-bold text-orange-500 leading-[1.1] font-banner-heading">
                        Fastest <br />
                        Delivery &<br />
                        Easy Pickup.
                    </h1>
                    <p className="py-6">
                        Homemade Food delivered to your doorstep. Browns Kitchen is an online<br />  platform for ordering fresh homemade food, from the homechef's kitchen.
                    </p>
                    <button className="btn btn-theme px-8">Get Started</button>
                </div>
                <div>
                    <img className='w-5/6 ml-auto' src={banner} alt="" />
                </div>
            </div>
            <div className='bg-base-200 mx-auto pt-20'>
                <div className='w-10/12 max-w-screen-xl mx-auto '>
                    <h3 className='text-3xl font-medium mb-5 text-orange-500'>Popular Foods</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service} />)
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
                            <small>Pick the days you'd like your meals to arrive. No subscription necessary! Just pick up your phone and order. Don't know how to order? Just call us.</small>
                        </div>
                        <div className='bg-base-100 p-5 py-8 rounded-t-[50px]'>
                            <img className='mx-auto' src="https://img.icons8.com/bubbles/50/null/steak.png" alt='' />
                            <h4 className='text-lg font-medium my-1'>Choose your food</h4>
                            <small>Select from a variety of homemade dishes & cuisines. You can browser our meals or you can build your own. We provide all kind of popular dishes.</small>
                        </div>
                        <div className='bg-base-100 p-5 py-8 rounded-t-[50px]'>
                            <img className='mx-auto' src="https://img.icons8.com/bubbles/50/null/person-laying-down.png" alt='' />
                            <h4 className='text-lg font-medium my-1'>Enjoy</h4>
                            <small>Dishes arrive refrigerated at your door. Heat in minutes & enjoy stress-free! We believe in no tension, just happy meals and happy customers.</small>
                        </div>
                    </div>
                </div>
                <div className='bg-base-100 mt-20 p-10'>
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
                                <h1 className='text-5xl font-bold text-orange-500'>12</h1>
                                <p className='text-gray-500'>Best <br /> Dishes</p>
                            </div>
                            <div className='bg-base-100 p-10 flex items-center gap-5 justify-center shadow-md rounded-xl'>
                                <h1 className='text-5xl font-bold text-orange-500'>1K+</h1>
                                <p className='text-gray-500'>Foods <br /> Ordered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;