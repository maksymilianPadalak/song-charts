import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useQuery } from 'react-query';
import { queryKeys } from '../../api/queryKeys';
import { fetchSong } from '../../api/admin/adminApiFunctions';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../../shared/components/Loader';

const SongDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { jwtHeader } = useAuth();
  const { data, isLoading } = useQuery(queryKeys.song, () => fetchSong(jwtHeader, id), {
    cacheTime: 0,
  });

  if (isLoading) return <Loader size={'lg'} />;

  return (
    <div className={'d-flex flex-column align-self-center text-center'}>
      <h1>{data?.songTitle}</h1>
      <div className={'d-flex justify-content-around'}>
        <div className={'d-flex'}>
          <h3>Artist:</h3>
          <h3>{data?.author}</h3>
        </div>
        <div className={'d-flex'}>
          <h3>Album:</h3>
          <h3>{data?.albumTitle}</h3>
        </div>
      </div>
      <div className={'m-5'}>
        <Form.Control as='textarea' value={data?.cleanedLyrics} />
      </div>
      <button className={'btn btn-dark w-50 align-self-center'}>Submit changes</button>
      <Link className={'btn btn-light w-50 align-self-center mt-3'} to={'admin/dashboard'}>
        Cancel
      </Link>
    </div>
  );
};

export default SongDetails;
