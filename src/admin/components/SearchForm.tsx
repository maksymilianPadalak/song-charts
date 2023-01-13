import Form from 'react-bootstrap/Form';
import React from 'react';

interface Props {
  isDisabled: boolean;
}

const SearchForm: React.FC<Props> = ({ isDisabled }) => {
  return (
    <div className={'d-flex flex-column align-items-center'}>
      <div className={'text-center w-75'}>
        <h3>Search artist or song</h3>
        <div className={'d-flex flex-column flex-sm-row mt-3 mb-3'}>
          <Form.Control
            disabled={isDisabled}
            type='text'
            placeholder='Artist'
            className={'mb-2 mb-sm-0 me-0 me-sm-2'}
          />
          <Form.Control
            disabled={isDisabled}
            type='text'
            placeholder='Album'
            className={'ms-0 ms-sm-2'}
          />
        </div>

        <button disabled={isDisabled} className={'btn btn-success mb-5 col-12 col-md-6'}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
