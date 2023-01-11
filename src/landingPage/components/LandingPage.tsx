import RappersCarousel from './RappersCarousel';
import MainChart from '../../charts/components/MainChart';
import React from 'react';
import SearchInput from './SearchInput';
import LogInAsAdmin from './LoginAsAdmin';

interface Props {
  className?: string;
}

const LandingPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} d-flex flex-column justify-content-between`}>
      <div>
        <RappersCarousel className={'mb-4'} />
        <SearchInput className={'px-5'} />
        <div style={{ height: '500px' }}>
          <MainChart />
        </div>
      </div>
      <div>
        <LogInAsAdmin />
      </div>
    </div>
  );
};

export default LandingPage;
