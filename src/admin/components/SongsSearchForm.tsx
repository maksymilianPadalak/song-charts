import Form from 'react-bootstrap/Form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchSongsFormValues } from '../../interfaces';

interface Props {
  isDisabled: boolean;
  submitSearchForm: (formValues: SearchSongsFormValues) => void;
}

const SongsSearchForm: React.FC<Props> = ({ isDisabled, submitSearchForm }) => {
  const { register, handleSubmit } = useForm<SearchSongsFormValues>();

  const onSubmit = (formValues: SearchSongsFormValues) => {
    submitSearchForm(formValues);
  };

  return (
    <div className={'d-flex flex-column align-items-center'}>
      <div className={'text-center w-75'}>
        <h3>Search artist or song</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'d-flex flex-column flex-sm-row mt-3 mb-3'}>
            <Form.Control
              disabled={isDisabled}
              type='text'
              placeholder='Artist'
              className={'mb-2 mb-sm-0 me-0 me-sm-2'}
              {...register('author')}
            />
            <Form.Control
              disabled={isDisabled}
              type='text'
              placeholder='Album'
              className={'ms-0 ms-sm-2'}
              {...register('albumTitle')}
            />
          </div>

          <button
            disabled={isDisabled}
            className={'btn btn-success mb-5 col-12 col-md-6'}
            type={'submit'}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SongsSearchForm;
