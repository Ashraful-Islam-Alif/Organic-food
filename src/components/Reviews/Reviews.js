import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    const reviewSlice = reviews.slice(0, 6)
    return (
        <div className='review-container'>
            {
                reviewSlice.map(review => <ReviewDetails
                    key={review.id}
                    review={review}
                ></ReviewDetails>

                )
            }
        </div>
    );
};

export default Reviews;