import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, setReviews }) => {
    const { image: profilePic } = review.user;
    const { service_name, service_image } = review;
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
            <img className='rounded-lg w-20 h-20' src={service_image} alt={service_name} />
            <div>
                <h4 className='text-lg font-bold'>{service_name}</h4>
                <img className='w-8 rounded-full' src={profilePic} alt="" />
                <small className='text-gray-500'>{review.review}</small>
            </div>
            <div className='ml-auto self-end'>
                <Link to={`/edit-review/${review._id}`}><button className="btn btn-sm btn-review mr-2">Edit</button></Link>
                <button onClick={handleDeleteReview} className='btn btn-sm btn-review'>Delete</button>
            </div>
        </div>
    )
}

export default MyReviewCard;