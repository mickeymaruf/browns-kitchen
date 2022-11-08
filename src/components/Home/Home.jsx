import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.jpg';

const Home = () => {
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
                    <button className="btn btn-primary px-8">Get Started</button>
                </div>
                <div>
                    <img className='w-5/6 ml-auto' src={banner} alt="" />
                </div>
            </div>
            <div className='bg-base-200 mx-auto py-20'>
                <div className='w-10/12 max-w-screen-xl mx-auto '>
                    <h3 className='text-3xl font-medium mb-5'>Popular Foods</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-center'>
                        <Link to="/services"><button className="btn btn-warning">See All</button></Link>
                    </div>
                </div>
            </div>
            <div className='newsletter'>
                Dome
            </div>
        </div>
    );
};

export default Home;