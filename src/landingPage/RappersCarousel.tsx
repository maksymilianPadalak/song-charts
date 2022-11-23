import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const RappersCarousel: React.FC = () => {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item>
        <div className='d-block w-100 carousel-background' />

        <Carousel.Caption>
          <h3>Kocham Monię 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block w-100 carousel-background' />

        <Carousel.Caption>
          <h3>Kocham Monię 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block w-100 carousel-background' />

        <Carousel.Caption>
          <h3>Kocham Monię 3</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default RappersCarousel;
