import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import CarouselItemBody from './CarouselItemBody';

interface Props {
  className?: string;
}

export interface CarouselItemInterface {
  name: string;
  word: string;
  rapperCharacterUrl: string;
}

const carouselItems: CarouselItemInterface[] = [
  {
    name: 'Snoop Dogg',
    word: 'Weed',
    rapperCharacterUrl: '../../../assets/characters/SnoopDogg.png',
  },
  {
    name: 'Kendrick Lamar',
    word: 'Compton',
    rapperCharacterUrl: '../../../assets/characters/KendrickLamar.png',
  },
  {
    name: 'Pezet',
    word: 'Pezet',
    rapperCharacterUrl: '../../../assets/characters/Pezet.png',
  },
];

const RappersCarousel: React.FC<Props> = ({ className }) => {
  return (
    <Carousel fade interval={3000} className={className}>
      {carouselItems.map((item) => (
        <Carousel.Item className='carousel-background burgundy' key={item.name}>
          <CarouselItemBody carouselItem={item} key={item.name} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RappersCarousel;
