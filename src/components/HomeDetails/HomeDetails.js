import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomeDetails = ({ review }) => {
    return (
        <div className='review-details'>
            <Container >
                <Row >
                    <Col ><h4>Name: {review.name}</h4></Col>
                </Row>
                <Row>
                    <Col><p><span>Detail Review:</span> {review.detail}</p></Col>
                </Row>
                <Row>
                    <Col><h6>Rating: {review.Rating}</h6></Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeDetails;