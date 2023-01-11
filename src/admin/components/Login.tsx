import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Form from 'react-bootstrap/Form';

interface Props {
  className?: string;
}

const Login: React.FC<Props> = ({ className }) => {
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    await onLogin();
  };

  return (
    <div className={`${className} d-flex justify-content-center align-items-center x-3`}>
      <div className={'d-flex flex-column align-items-center'}>
        <h1 className={'mb-3'}>Welcome Mr Admin</h1>
        <Form.Control size='lg' type='text' placeholder='Login' className={'mb-2'} />
        <Form.Control size='lg' type='text' placeholder='Password' className={'mb-4'} />
        <button className={'btn btn-primary'} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
