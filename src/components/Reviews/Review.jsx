import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const Review = ({ review }) => {
    const { name, image } = review.user;
    return (
        <div className='flex items-start gap-4 p-2 rounded-lg shadow-sm border'>
            <img className='rounded-lg w-20 h-20 border' src={image} alt={name} />
            <div className='pb-2 pr-2'>
                <h4 className='text-xl font-bold'>{name}</h4>
                <p className='flex items-center gap-1'>
                    <small className='text-gray-500'>Rating:</small> <strong className='text-yellow-500'>{review?.rating || 0}</strong>
                    <BsFillStarFill className='text-yellow-500' />
                </p>
                <small className='text-gray-500'>Review:<strong> {review.review}</strong> </small>
            </div>
        </div>
    );
};

export default Review;