import React from 'react';
import RappersCarousel from './landingPage/RappersCarousel';
import MainChart from './charts/components/MainChart';

const App: React.FC = () => {
  return (
    <div>
      <RappersCarousel />
      <div style={{ height: '500px' }}>
        <MainChart />
      </div>
    </div>
  );
};

export default App;
