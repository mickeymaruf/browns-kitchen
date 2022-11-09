import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useAuth } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import Review from '../Reviews/Review';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    const { user } = useAuth();
    const location = useLocation();
    const service = useLoaderData().data;
    const { _id, name, image, is_new, price, desc } = service;
    const [reviews, setReviews] = useState([]);
    useTitle(name);

    // handle add review
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.user = { email: user.email, name: user.displayName, image: user.photoURL };
        data.service = _id;
        data.service_name = name;
        data.service_image = image;
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.acknowledged === true) {
                    reset();
                    setReviews([data.review, ...reviews]);
                    toast.success("Review added!");
                }
            })
    }
    // load reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setReviews(data.data);
                }
            })
    }, [_id])

    return (
        <div className='w-10/12 max-w-screen-xl mx-auto mb-20'>
            <div className='md:grid grid-cols-3 items-center gap-10 py-10 mb-10'>
                <div className='col-span-1 mb-5 md:mb-0'>
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
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        reviews.map(review => <Review key={review._id} review={review} />)
                    }
                </div>
                {
                    user && user.email ?
                        <form onSubmit={handleSubmit(onSubmit)} className='lg:w-1/2 mt-8'>
                            <textarea {...register('review')} className="w-full textarea border-2 h-24 textarea-warning" placeholder="Write a review" required></textarea>
                            <button className='btn btn-theme mt-2'>Submit</button>
                        </form>
                        :
                        <p className='mt-5 pl-3 font-medium'>Please <Link className='font-bold underline text-orange-500' state={{ from: location }} to="/login" replace>Login</Link> to submit a review.</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;