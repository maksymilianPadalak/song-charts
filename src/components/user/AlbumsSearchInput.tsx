import React from 'react';
import Form from 'react-bootstrap/Form';
import { SearchAlbumsFormValues } from '../../interfaces';
import { useForm } from 'react-hook-form';

interface Props {
  className?: string;
  submitSearchForm: (formValues: SearchAlbumsFormValues) => void;
}

const AlbumsSearchInput: React.FC<Props> = ({ className, submitSearchForm }) => {
  const { register, handleSubmit } = useForm<SearchAlbumsFormValues>();

  const onSubmit = (formValues: SearchAlbumsFormValues) => {
    submitSearchForm(formValues);
  };

  return (
    <form
      className={`${className} d-flex flex-column flex-sm-row`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Control
        size='lg'
        type='text'
        placeholder='Enter artist name'
        className={className}
        {...register('author')}
      />
      <button
        className={'btn btn-success col-12 col-sm-2 ms-0 ms-sm-3 mt-2 mt-sm-0'}
        type={'submit'}
      >
        Search
      </button>
    </form>
  );
};

export default AlbumsSearchInput;
