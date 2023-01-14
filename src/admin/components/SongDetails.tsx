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

  if (isLoading) return <Loader size={'lg'} fullScreen />;

  return (
    <div className={'d-flex flex-column align-self-center text-center'}>
      <div className={'my-3 my-md-4'}>
        <label>Song</label>
        <h1>{data?.songTitle}</h1>
      </div>
      <div className={'d-none d-md-flex justify-content-around'}>
        <div>
          <label>Artist</label>
          <h3>{data?.author}</h3>
        </div>
        <div>
          <label>Album</label>
          <h3>{data?.albumTitle}</h3>
        </div>
      </div>
      <div className={'m-2 m-md-5'}>
        <Form.Control as='textarea' className={'text-area'} value={data?.cleanedLyrics} />
      </div>
      <button className={'btn btn-dark col-11 col-sm-6 align-self-center'}>Submit changes</button>
      <Link
        className={'btn btn-light col-11 col-sm-6 align-self-center mt-3'}
        to={'admin/dashboard'}
      >
        Cancel
      </Link>
    </div>
  );
};

export default SongDetails;
