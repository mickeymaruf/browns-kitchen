import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="grid grid-cols-2 items-center justify-between">
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
            <div className='py-20'>
                <h3>Popular Foods</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-xl">
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
                    <div className="card w-96 bg-base-100 shadow-xl">
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
                    <div className="card w-96 bg-base-100 shadow-xl">
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
                    <button className="btn btn-warning">Warning</button>
                </div>
            </div>
        </div>
    );
};

export default Home;