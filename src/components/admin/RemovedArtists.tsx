import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { reactQueryKeys } from '../../api/admin/reactQueryKeys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import Loader from '../shared/Loader';
import { fetchRemovedArtists, reviveArtist } from '../../api/admin/apiFunctions';
import { useAuth } from '../../hooks/useAuth';

const RemovedArtists: React.FC = () => {
  const { jwtHeader } = useAuth();
  const { data, isLoading, refetch, isRefetching } = useQuery(
    reactQueryKeys.removedArtists,
    () => fetchRemovedArtists(jwtHeader),
    {
      cacheTime: 0,
    },
  );

  const {
    mutate,
    isLoading: isMutating,
    isError,
  } = useMutation(reviveArtist, {
    onSuccess: () => {
      refetch();
    },
  });
  const handleReviveArtist = (artist: string) => {
    mutate({ artist, jwtHeader });
  };

  const removedArtists = data ?? [];

  if (isLoading || isRefetching || isMutating) return <Loader />;
  if (removedArtists.length === 0) return <h3>No Artists found :(</h3>;

  return (
    <div>
      {removedArtists.map((artist) => (
        <div
          className={'d-flex justify-content-between align-items-center my-1 w-100 list-item'}
          onClick={() => handleReviveArtist(artist)}
        >
          <h1 className={'me-4'}>{artist}</h1>
          <FontAwesomeIcon icon={faFire} size={'lg'} />
        </div>
      ))}
      {isError && <h3 className={'text-danger mt-3'}>Unable to revive Artist :(</h3>}
    </div>
  );
};

export default RemovedArtists;
