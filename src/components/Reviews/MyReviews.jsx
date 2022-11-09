import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../Others/Spinner';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    useTitle('My reviews');
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // load reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('browns_kitchen_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setReviews(data.data);
                    setSpinner(false);
                }
            })
            .catch(error => {
                setSpinner(false);
                console.log(error);
            })
    }, [user.email]);

    return (
        <>
            {
                spinner ?
                    <div className='pt-40 pb-48 flex justify-center'>
                        <Spinner />
                    </div>
                    :
                    <div className='w-10/12 max-w-screen-xl mx-auto pt-10 mb-20'>
                        {
                            reviews.length < 1 ?
                                <h3 className='text-5xl text-center mt-28 mb-52'>No reviews were added !</h3>
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
            }
        </>
    );
};

export default MyReviews;