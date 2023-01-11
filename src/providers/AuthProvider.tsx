import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface AuthContextValue {
  token: string;
  onLogin: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue>({
  token: '',
  onLogin: async () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = React.useState<string>('');

  const handleLogin = async () => {
    const token = 'asdasd';
    setToken(token);
  };

  const value = {
    token,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
