import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { logIn } from '../../api/admin/adminApiFunctions';
import Loader from '../../shared/components/Loader';

interface Props {
  className?: string;
}

const Login: React.FC<Props> = ({ className }) => {
  const { onLogIn } = useAuth();
  const { mutate, isLoading } = useMutation(logIn, {
    onSuccess: (data) => {
      onLogIn(data.token);
    },
  });

  const handleLogin = () => mutate({ username: 'test', password: 'test' });

  return (
    <div className={`${className} d-flex justify-content-center align-items-center`}>
      <div className={'d-flex flex-column align-items-center'}>
        <h1 className={'mb-3'}>Welcome Mr Admin</h1>
        <Form.Control size='lg' type='text' placeholder='Login' className={'mb-2'} />
        <Form.Control size='lg' type='text' placeholder='Password' className={'mb-4'} />
        {isLoading ? (
          <Loader />
        ) : (
          <button className={'btn btn-primary'} onClick={handleLogin}>
            Login
          </button>
        )}
        <Link to={'/'} className={'btn btn-warning mt-4'}>
          Go back to dashboard
        </Link>
      </div>
    </div>
  );
};

export default Login;
