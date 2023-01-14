import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SongsSearchForm from './SongsSearchForm';
import SongsList from './SongsList';
import { useQuery } from 'react-query';
import { queryKeys } from '../../api/queryKeys';
import { fetchSongs } from '../../api/admin/adminApiFunctions';
import Loader from '../../shared/components/Loader';
import Error from '../../shared/components/Error';
import { SearchSongsFormValues } from '../../interfaces';
import { FetchSongsArguments } from '../../api/useQueryInterfaces';

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
    isRefetching: isSongsRefetching,
    isError,
  } = useQuery([queryKeys.songs, fetchSongsArguments], () => fetchSongs(fetchSongsArguments), {
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
      {isSongsLoading || isSongsRefetching ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <SongsList songs={songs} />
      )}
    </div>
  );
};

export default AdminDashboard;
