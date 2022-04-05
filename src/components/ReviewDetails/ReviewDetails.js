import React from 'react';
import './ReviewDetails.css'
const ReviewDetails = ({ review }) => {
    return (
        <div className='review-details'>
            <h4>Name: {review.name}</h4>
            <p><span>Detail Review:</span> {review.detail}</p>
            <h6>Rating: {review.Rating}</h6>

        </div>
    );
};

export default ReviewDetails;