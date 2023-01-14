import React from 'react';
import { CarouselItemInterface } from './RappersCarousel';

interface Props {
  carouselItem: CarouselItemInterface;
}

const CarouselItemBody: React.FC<Props> = ({ carouselItem }) => {
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='d-flex flex-row justify-content-between align-items-center w-75'>
        <div className='col-xl-4 col-6'>
          <img src={carouselItem.rapperCharacterUrl} className='img-fluid' alt='Responsive image' />
        </div>
        <div className='col-xl-6 col-6 d-flex flex-column align-items-center'>
          <h3 className='my-2'>{carouselItem.name}</h3>
          <p>
            Most popular word: <b>{carouselItem.word}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItemBody;
