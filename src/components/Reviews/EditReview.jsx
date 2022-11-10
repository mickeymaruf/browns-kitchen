import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
    const review = useLoaderData().data;
    const [reviewText, setReviewText] = useState(review.review);
    useTitle(`Edit review`);

    const { register, handleSubmit } = useForm();
    const onSubmit = formData => {
        fetch(`https://browns-kitchen-server.vercel.app/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Review updated!");
                    setReviewText(formData.review);
                }
            })
    }
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto pt-10 mb-20'>
            <div className='md:w-5/6 lg:w-1/2 mx-auto relative mb-5'>
                <Link to="/myReviews"><BsArrowLeftCircleFill className='w-7 h-7 cursor-pointer absolute text-orange-500 top-1/2 -translate-y-1/2 left-0' /></Link>
                <h3 className='text-3xl font-medium text-center'>Edit Review</h3>
            </div>
            <div className='md:w-5/6 lg:w-1/2 mx-auto border border-orange-200 p-10 rounded-xl'>
                <div className='flex items-center gap-2'>
                    <img className='w-12 rounded-full' src={review.service_image} alt="" />
                    <h3 className="text-lg font-bold">{review.service_name}</h3>
                </div>
                <p className="py-4 pt-2"><strong>Your review:</strong> {reviewText}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('review')} className="w-full textarea border-2 h-24 textarea-warning" placeholder="Write a review" defaultValue={review.review} required></textarea>
                    <button className='btn btn-theme mt-2'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditReview;