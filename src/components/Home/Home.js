import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeDetails from '../HomeDetails/HomeDetails';

import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews()
    const reviewSlice = reviews.slice(0, 3)
    return (
        <div >

            <div className='m-4 '>
                <Container >
                    <Row className='justify-content-md-center align-items-center'>
                        <Col sm={8} className="">
                            <h1 className='home-text '>Choose Your Love</h1>
                            <h1 className='home-text1 '>Get Your Favourite</h1>
                            <p className='para-text'>TopSpeed is a leading marketplace for the automotive industry that connects car shoppers with sellers.</p>
                            <button className='detail-btn'>View Details</button>
                        </Col>
                        <Col sm={4}>

                            <img className='img-fluid' src="./images/homeCar.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <h1 className='review-header'>Customer Reviews </h1>
                <div className='review-container'>
                    {
                        reviewSlice.map(review => <HomeDetails
                            key={review.id}
                            review={review}
                        ></HomeDetails>

                        )
                    }
                </div>
            </div>

            <button className='all-review'>
                <Link className='link-review' to='/review'>See All Reviews</Link>
            </button>
        </div>
    );
};

export default Home;