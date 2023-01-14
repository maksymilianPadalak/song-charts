import MainChart from '../charts/MainChart';
import React from 'react';

interface Props {
  className?: string;
}

const AlbumStats: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} d-flex flex-column justify-content-between`}>
      <div style={{ height: '500px' }}>
        <MainChart />
      </div>
    </div>
  );
};

export default AlbumStats;
