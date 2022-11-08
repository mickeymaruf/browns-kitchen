import React from 'react';

const Review = ({ review }) => {
    const { name, image } = review.user;
    return (
        <div className='flex gap-5 p-3 rounded-lg shadow-md'>
            <img className='rounded-lg w-20 h-20' src={image} alt={name} />
            <div>
                <h4 className='text-xl font-bold'>{name}</h4>
                <small className='text-gray-500'>{review.review}</small>
            </div>
        </div>
    );
};

export default Review;