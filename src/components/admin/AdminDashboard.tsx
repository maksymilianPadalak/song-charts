import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SongsSearchForm from './SongsSearchForm';
import SongsList from './SongsList';
import { useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/admin/reactQueryKeys';
import { fetchSongs } from '../../api/admin/apiFunctions';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import { SearchSongsFormValues } from '../../interfaces';
import { FetchSongsArguments } from '../../api/user/reactQueryInterfaces';

interface Props {
  className?: string;
}

const AdminDashboard: React.FC<Props> = ({ className }) => {
  const { onLogout, jwtHeader } = useAuth();
  const [fetchSongsArguments, setFetchSongsArguments] = useState<FetchSongsArguments>({
    jwtHeader,
  });

  const {
    data,
    isLoading: isSongsLoading,
    isError,
  } = useQuery([reactQueryKeys.songs, fetchSongsArguments], () => fetchSongs(fetchSongsArguments), {
    cacheTime: 0,
  });

  const songs = data ?? [];

  const handleLogout = async () => {
    await onLogout();
  };

  const submitSearchForm = (values: SearchSongsFormValues) => {
    setFetchSongsArguments({
      jwtHeader,
      author: values.author === '' ? undefined : values.author,
      albumTitle: values.albumTitle === '' ? undefined : values.albumTitle,
    });
  };

  return (
    <div className={className}>
      <div className={'d-flex justify-content-end'}>
        <button className={'btn btn-danger m-2'} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <SongsSearchForm isDisabled={isSongsLoading} submitSearchForm={submitSearchForm} />
      {isSongsLoading ? <Loader /> : isError ? <Error /> : <SongsList songs={songs} />}
    </div>
  );
};

export default AdminDashboard;
