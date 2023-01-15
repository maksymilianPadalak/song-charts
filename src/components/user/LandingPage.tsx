import React, { useState } from 'react';
import ArtistsSearchForm from './AlbumsSearchInput';
import LogInAsAdmin from './LoginAsAdmin';
import { useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/user/reactQueryKeys';
import { fetchAlbums } from '../../api/user/apiFunctions';
import { FetchAlbumsArguments } from '../../api/admin/reactQueryInterfaces';
import Loader from '../shared/Loader';
import AlbumsList from './AlbumsList';
import { SearchAlbumsFormValues } from '../../interfaces';

interface Props {
  className?: string;
}

const LandingPage: React.FC<Props> = ({ className }) => {
  const [fetchAlbumsArguments, setFetchAlbumsArguments] = useState<FetchAlbumsArguments>({
    author: undefined,
  });
  const { data, isLoading } = useQuery(
    [reactQueryKeys.albums, fetchAlbumsArguments],
    () => fetchAlbums(fetchAlbumsArguments),
    {
      cacheTime: 0,
    },
  );

  const submitSearchForm = (values: SearchAlbumsFormValues) => {
    setFetchAlbumsArguments({ author: values.author === '' ? undefined : values.author });
  };

  const albums = data === undefined || typeof data !== typeof [] ? [] : data;

  return (
    <div className={`${className} d-flex flex-column justify-content-between`}>
      <div>
        <div className='burgundy p-5 d-flex  flex-column align-items-center text-center'>
          <h1>Welcome to albums analysis</h1>
          <h5 className={'mt-3'}>Filter albums by artists and display stats!</h5>
        </div>
        <LogInAsAdmin />
        <ArtistsSearchForm className={'px-5'} submitSearchForm={submitSearchForm} />
        <div className={'mt-5'}>
          {isLoading ? <Loader /> : <AlbumsList albums={albums.filter((album) => album !== '')} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
