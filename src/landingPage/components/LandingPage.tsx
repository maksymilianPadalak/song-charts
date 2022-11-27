import RappersCarousel from './RappersCarousel';
import MainChart from '../../charts/components/MainChart';
import React from 'react';
import SearchInput from './SearchInput';

const LandingPage: React.FC = () => {
  return (
    <div>
      <RappersCarousel className='mb-4' />
      <SearchInput className='px-5' />
      <div style={{ height: '500px' }}>
        <MainChart />
      </div>
    </div>
  );
};

export default LandingPage;
