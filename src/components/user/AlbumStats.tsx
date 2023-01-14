import MainChart from '../charts/MainChart';
import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  className?: string;
}

const AlbumStats: React.FC<Props> = ({ className }) => {
  const { title } = useParams() as { title: string };

  return (
    <div className={`${className}`}>
      <div className={'d-flex justify-content-center m-3'}>
        <h1>{title}</h1>
      </div>
      <div style={{ height: '500px' }}>
        <MainChart />
      </div>
    </div>
  );
};

export default AlbumStats;
