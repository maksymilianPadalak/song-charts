import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const SongDetails: React.FC = () => {
  return (
    <div className={'d-flex flex-column align-self-center text-center'}>
      <h1>Petki</h1>
      <div className={'d-flex justify-content-around'}>
        <div className={'d-flex'}>
          <h3>Artist:</h3>
          <h3>Mata</h3>
        </div>
        <div className={'d-flex'}>
          <h3>Album:</h3>
          <h3>100 dni do matury</h3>
        </div>
      </div>
      <div className={'m-5'}>
        <Form.Control as='textarea'></Form.Control>
      </div>
      <button className={'btn btn-dark w-50 align-self-center'}>Submit changes</button>
      <Link className={'btn btn-light w-50 align-self-center mt-3'} to={'admin/dashboard'}>
        Cancel
      </Link>
    </div>
  );
};

export default SongDetails;
