import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useMutation, useQuery } from 'react-query';
import { queryKeys } from '../../api/queryKeys';
import { cleanLyrics, fetchSong } from '../../api/admin/adminApiFunctions';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../shared/Loader';
import { useForm } from 'react-hook-form';

interface FormValues {
  cleanedLyrics: string;
}

const SongDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const { jwtHeader } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm<FormValues>();

  const textAreaValue = watch('cleanedLyrics');

  const { data, isLoading } = useQuery(queryKeys.song, () => fetchSong(jwtHeader, id), {
    cacheTime: 0,
  });

  const {
    mutate,
    isLoading: isSubmitting,
    isError: isErrorSubmitting,
    isSuccess: isSuccessSubmitting,
  } = useMutation(cleanLyrics, {
    onSuccess: () => {
      navigate('admin/dashboard');
    },
  });

  const onSubmit = ({ cleanedLyrics }: FormValues) => {
    mutate({ cleanedLyrics, jwtHeader, id });
  };

  const isButtonDisabled =
    data?.cleanedLyrics === textAreaValue || !isDirty || textAreaValue === '';

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
      {isSubmitting ? (
        <Loader />
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'m-2 mx-md-5 mt-md-4 mb-md-4'}>
              <Form.Control
                as='textarea'
                className={'text-area'}
                value={textAreaValue}
                {...register('cleanedLyrics')}
              >
                {data?.cleanedLyrics}
              </Form.Control>
            </div>
            {isErrorSubmitting && <h3 className={'text-danger mb-4'}>Unable to clean lyrics</h3>}
            {isSuccessSubmitting && <h3 className={'text-success mb-4'}>Lyrics updated</h3>}

            <button
              className={'btn btn-dark col-11 col-sm-6 align-self-center'}
              disabled={isButtonDisabled}
            >
              Submit changes
            </button>
          </form>

          <Link
            className={'btn btn-light col-11 col-sm-6 align-self-center mt-3'}
            to={'admin/dashboard'}
          >
            Cancel
          </Link>
        </>
      )}
    </div>
  );
};

export default SongDetails;
