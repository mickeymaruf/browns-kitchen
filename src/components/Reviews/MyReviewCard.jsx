import React from 'react';
import toast from 'react-hot-toast';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, setReviews }) => {
    const { image: profilePic } = review.user;
    const { service, service_name, service_image } = review;
    const handleDeleteReview = () => {
        const confirm = window.confirm('Are you sure want to delete this review?');
        if (!confirm) {
            return;
        }
        fetch(`https://browns-kitchen-server.vercel.app/reviews/${review._id}`, {
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
        <div className='flex gap-5 p-2 rounded-lg shadow-sm border'>
            <img className='rounded-lg w-24 h-24' src={service_image} alt={service_name} />
            <div className='flex-1'>
                <div className='flex'>
                    <Link to={`/services/${service}`}><h4 className='text-lg font-bold hover:text-orange-600'>{service_name}</h4></Link>
                    <div className='ml-auto'>
                        <Link to={`/edit-review/${review._id}`}><button className="btn btn-sm btn-review mr-2">Edit</button></Link>
                        <button onClick={handleDeleteReview} className='btn btn-sm btn-review'>Delete</button>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='w-8 h-8 rounded-full' src={profilePic} alt="" />
                    <p className='flex items-center gap-1'>
                        <strong className='text-gray-500'><small>Rating:</small><span className='text-yellow-500 ml-2'>{review?.rating || 0}</span></strong>
                        <BsFillStarFill className='text-yellow-500' />
                    </p>
                </div>
                <p className='text-gray-500 text-sm mt-1 pb-2'><strong>Review:</strong> {review.review}</p>
            </div>
        </div>
    )
}

export default MyReviewCard;