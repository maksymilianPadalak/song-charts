import MainChart from '../charts/MainChart';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/user/reactQueryKeys';
import { fetchAlbumStats } from '../../api/user/apiFunctions';
import Loader from '../shared/Loader';

interface Props {
  className?: string;
}

const AlbumStats: React.FC<Props> = ({ className }) => {
  const { title } = useParams() as { title: string };

  const { data, isLoading } = useQuery(reactQueryKeys.albumStats, () =>
    fetchAlbumStats({ albumTitle: title }),
  );

  if (isLoading) return <Loader fullScreen />;

  const stats = data || {};
  const artists: string[] = Object.keys(stats).filter((key) => key !== 'includedSongs');

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
