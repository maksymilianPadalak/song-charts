import React from 'react';
import { CarouselItemInterface } from './RappersCarousel';

interface Props {
  carouselItem: CarouselItemInterface;
}

const CarouselItemBody: React.FC<Props> = ({ carouselItem }) => {
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center w-75'>
        <h3 className='col-12 col-md-6'>{carouselItem.name}</h3>
        <p className='col-12 col-md-6'>{carouselItem.quote}</p>
      </div>
    </div>
  );
};

export default CarouselItemBody;
