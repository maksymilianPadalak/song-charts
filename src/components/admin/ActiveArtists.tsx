import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/admin/reactQueryKeys';
import { fetchActiveArtists } from '../../api/user/apiFunctions';
import Loader from '../shared/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteArtist } from '../../api/admin/apiFunctions';
import { useAuth } from '../../hooks/useAuth';

const ActiveArtists: React.FC = () => {
  const { jwtHeader } = useAuth();
  const { data, isLoading, refetch, isRefetching } = useQuery(
    reactQueryKeys.activeArtists,
    fetchActiveArtists,
    {
      cacheTime: 0,
    },
  );

  const activeArtists = data ?? [];

  const {
    mutate,
    isLoading: isMutating,
    isError,
  } = useMutation(deleteArtist, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteArtist = (artist: string) => {
    mutate({ artist, jwtHeader });
  };

  if (isLoading || isRefetching || isMutating) return <Loader />;
  if (activeArtists.length === 0) return <h3>No Artists found :(</h3>;

  return (
    <div>
      {activeArtists.map((artist) => (
        <div
          className={'d-flex justify-content-between align-items-center my-1 clickable list-item'}
          onClick={() => {
            handleDeleteArtist(artist);
          }}
        >
          <h1 className={'me-4'}>{artist}</h1>
          <FontAwesomeIcon icon={faTrash} size={'lg'} />
        </div>
      ))}
      {isError && <h3 className={'text-danger'}>Unable to delete Artist :(</h3>}
    </div>
  );
};

export default ActiveArtists;
