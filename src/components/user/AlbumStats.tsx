import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/user/reactQueryKeys';
import { fetchAlbumStats } from '../../api/user/apiFunctions';
import Loader from '../shared/Loader';
import MainChart from '../charts/MainChart';

interface Props {
  className?: string;
}

const AlbumStats: React.FC<Props> = ({ className }) => {
  const { title } = useParams() as { title: string };

  const { data, isLoading } = useQuery(
    reactQueryKeys.albumStats,
    () => fetchAlbumStats({ albumTitle: title }),
    { cacheTime: 0 },
  );

  if (isLoading) return <Loader fullScreen />;

  const stats = data;
  // @ts-ignore
  const artists: string[] = Object.keys(stats).filter((key) => key !== 'includedSongs');

  // @ts-ignore
  const statsByArtist = artists.map((artist) => ({
    // @ts-ignore
    [artist]: Object.keys(stats[artist]?.freq)
      // @ts-ignore
      .map((key) => ({ [key]: stats[artist]?.freq[key] }))
      // @ts-ignore
      .sort((a, b) => Object.values(b) - Object.values(a))
      .slice(0, 10)
      .reduce((acc, cur) => {
        const key = Object.keys(cur)[0];
        acc[key] = cur[key];
        return acc;
      }, {} as Record<string, number>),
  }));

  if (statsByArtist.length === 0)
    return (
      <div className={'d-flex min-vh-100 align-items-center justify-content-center'}>
        <h2>We are unable to display data about this track :(</h2>
      </div>
    );

  return (
    <div className={`${className}`}>
      <div className={'d-flex justify-content-center m-3 text-center'}>
        <h1>{title}</h1>
      </div>
      {statsByArtist.map((stat) => {
        const artistName = Object.keys(stat)[0];
        return (
          <div
            className={'d-flex flex-column align-items-center'}
            style={{ height: '500px' }}
            key={artistName}
          >
            <h3 className={'mt-2'}>Artist: {artistName}</h3>
            <MainChart mostPopularWords={stat[artistName]} />
            <h5 className={'mb-2'}>Included songs</h5>
            <div>{stats?.includedSongs.join(', ')}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumStats;
