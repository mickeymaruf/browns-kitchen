import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

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
            {
                reviews.length < 1 ?
                    <h3 className='text-5xl text-center mt-24 mb-52'>No reviews were added !</h3>
                    :
                    <>
                        <h3 className='text-3xl font-medium text-center mb-10'>My Reviews</h3>
                        <div className='grid grid-cols-2 gap-10'>
                            {
                                reviews.map(review => <MyReviewCard
                                    key={review._id}
                                    review={review}
                                    setReviews={setReviews}
                                />)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

// my review card
const MyReviewCard = ({ review, setReviews }) => {
    const { image: profilePic } = review.user;
    const handleDeleteReview = () => {
        const confirm = window.confirm('Are you sure want to delete this review?');
        if (!confirm) {
            return;
        }
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setReviews(prevState => prevState.filter(rvew => rvew._id !== review._id));
                    toast.success("Review deleted!");
                }
            })
    }
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
                <button onClick={handleDeleteReview} className='btn btn-sm btn-review'>Delete</button>
            </div>
        </div>
    )
}

export default MyReviews;