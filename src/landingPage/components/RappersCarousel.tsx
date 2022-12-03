import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import CarouselItemBody from './CarouselItemBody';

interface Props {
  className?: string;
}

export interface CarouselItemInterface {
  name: string;
  quote: string;
}

const carouselItems: CarouselItemInterface[] = [
  { name: 'Kocham Monię 1', quote: 'Monia jest super' },
  { name: 'Kocham Monię 2', quote: 'Monia jest super' },
  { name: 'Kocham Monię 3', quote: 'Monia jest super' },
];

const RappersCarousel: React.FC<Props> = ({ className }) => {
  return (
    <Carousel fade interval={null} className={className}>
      {carouselItems.map((item) => (
        <Carousel.Item className='carousel-background' key={item.name}>
          <CarouselItemBody carouselItem={item} key={item.name} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RappersCarousel;
