import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import SearchForm from './SearchForm';
import SongsList from './SongsList';
import { useQuery } from 'react-query';
import { queryKeys } from '../../api/queryKeys';
import { fetchSongs } from '../../api/admin/adminApiFunctions';
import Loader from '../../shared/components/Loader';
import Error from '../../shared/components/Error';

interface Props {
  className?: string;
}

const AdminDashboard: React.FC<Props> = ({ className }) => {
  const { onLogout, jwtHeader } = useAuth();
  const {
    data,
    isLoading: isSongsLoading,
    isError,
  } = useQuery(queryKeys.songs, () => fetchSongs(jwtHeader));

  const songs = data ?? [];

  const handleLogout = async () => {
    await onLogout();
  };

  return (
    <div className={className}>
      <div className={'d-flex justify-content-end'}>
        <button className={'btn btn-danger m-2'} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <SearchForm isDisabled={isSongsLoading} />
      {isSongsLoading ? <Loader /> : isError ? <Error /> : <SongsList songs={songs} />}
    </div>
  );
};

export default AdminDashboard;
