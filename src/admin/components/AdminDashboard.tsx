import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Form from 'react-bootstrap/Form';

interface Props {
  className?: string;
}

const AdminDashboard: React.FC<Props> = ({ className }) => {
  const { onLogout } = useAuth();

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
      <div className={'d-flex flex-column align-items-center'}>
        <div className={'text-center w-75'}>
          <h3>Search artist or song</h3>
          <div className={'d-flex flex-column flex-sm-row mt-3 mb-3'}>
            <Form.Control
              type='text'
              placeholder='Artist'
              className={'mb-2 mb-sm-0 me-0 me-sm-2'}
            />
            <Form.Control type='text' placeholder='Album' className={'ms-0 ms-sm-2'} />
          </div>

          <button className={'btn btn-success mb-5 col-12 col-md-6'}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
