import RappersCarousel from './RappersCarousel';
import MainChart from '../../charts/components/MainChart';
import React from 'react';
import SearchInput from './SearchInput';
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <RappersCarousel className='mb-4' />
      <SearchInput className='px-5' />
      <div style={{ height: '500px' }}>
        <MainChart />
      </div>
    </div>
  );
};

export default LandingPage;
