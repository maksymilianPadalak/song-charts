import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    await onLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
