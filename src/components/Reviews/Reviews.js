import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className='review-container'>
            {
                reviews.map(review => <ReviewDetails
                    key={review.id}
                    review={review}
                ></ReviewDetails>

                )
            }
        </div>
    );
};

export default Reviews;