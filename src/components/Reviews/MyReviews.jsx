import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    // load reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setReviews(data.data);
                }
            })
    }, [user.email]);

    return (
        <div className='w-10/12 max-w-screen-xl mx-auto pt-10 mb-20'>
            <h3 className='text-3xl font-medium text-center mb-10'>My Reviews</h3>
            <div className='grid grid-cols-2 gap-10'>
                {
                    reviews.map(review => <MyReviewCard key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

// my review card
const MyReviewCard = ({ review }) => {
    const { image: profilePic } = review.user;
    return (
        <div className='flex gap-5 p-3 rounded-lg shadow-md'>
            <img className='rounded-lg w-20 h-20' src={review.service_image} alt={review.service_name} />
            <div>
                <h4 className='text-lg font-bold'>{review.service_name}</h4>
                <img className='w-8 rounded-full' src={profilePic} alt="" />
                <small className='text-gray-500'>{review.review}</small>
            </div>
            <div className='ml-auto self-end'>
                <button className='btn btn-sm btn-review mr-2'>Edit</button>
                <button className='btn btn-sm btn-review'>Delete</button>
            </div>
        </div>
    )
}

export default MyReviews;