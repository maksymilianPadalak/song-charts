import RappersCarousel from './RappersCarousel';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import LogInAsAdmin from './LoginAsAdmin';
import { useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/user/reactQueryKeys';
import { fetchAlbums } from '../../api/user/apiFunctions';
import { FetchAlbumsArguments } from '../../api/admin/reactQueryInterfaces';
import Loader from '../shared/Loader';
import AlbumsList from './AlbumsList';

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

  const albums = data ?? [];

  return (
    <div className={`${className} d-flex flex-column justify-content-between`}>
      <div>
        <RappersCarousel className={'mb-2'} />
        <LogInAsAdmin />
        <SearchInput className={'px-5'} />
        {isLoading ? <Loader /> : <AlbumsList albums={albums.filter((album) => album !== '')} />}
      </div>
    </div>
  );
};

export default LandingPage;
