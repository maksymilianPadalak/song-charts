import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import SearchForm from './SearchForm';
import SongsList from './SongsList';
import { useQuery } from 'react-query';
import { fetchPosts } from '../../api/admin/adminApiFunctions';
import { queryKeys } from '../../api/queryKeys';

interface Props {
  className?: string;
}

const AdminDashboard: React.FC<Props> = ({ className }) => {
  const { onLogout } = useAuth();
  const { data, isLoading } = useQuery(queryKeys.songs, fetchPosts);

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
      <SearchForm />
      <SongsList />
    </div>
  );
};

export default AdminDashboard;
