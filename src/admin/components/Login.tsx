import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { logIn } from '../../api/admin/adminApiFunctions';
import Loader from '../../shared/components/Loader';
import { useForm } from 'react-hook-form';

interface Props {
  className?: string;
}

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC<Props> = ({ className }) => {
  const { onLogIn } = useAuth();

  const { mutate, isLoading, isError } = useMutation(logIn, {
    onSuccess: (data) => {
      onLogIn(data.token);
    },
  });

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = ({ username, password }: FormValues) => {
    mutate({ username, password });
  };

  return (
    <div className={`${className} d-flex justify-content-center align-items-center`}>
      <form className={'d-flex flex-column align-items-center'} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={'mb-3'}>Welcome Mr Admin</h1>
        <Form.Control
          size='lg'
          type='text'
          placeholder='Login'
          className={'mb-2'}
          isInvalid={isError}
          {...register('username')}
        />
        <Form.Control
          size='lg'
          type='password'
          placeholder='Password'
          isInvalid={isError}
          className={'mb-4'}
          {...register('password')}
        />
        {isError && <h5 className={'text-danger mb-2'}>Wrong username or password</h5>}
        {isLoading ? (
          <Loader />
        ) : (
          <button className={'btn btn-primary'} type={'submit'}>
            Login
          </button>
        )}
        <Link to={'/'} className={'btn btn-warning mt-4'}>
          Go back to dashboard
        </Link>
      </form>
    </div>
  );
};

export default Login;
