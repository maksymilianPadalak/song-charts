import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface AuthContextValue {
  token: string;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue>({
  token: '',
  onLogin: async () => {},
  onLogout: async () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = React.useState<string>('');

  const handleLogin = async () => {
    //TODO handle login logic with http request here
    const token = 'asdasd';
    setToken(token);
  };

  const handleLogout = async () => {
    //TODO handle logout logic with http request here
    setToken('');
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
