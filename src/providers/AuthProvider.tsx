import React, { ReactNode } from 'react';
import { JwtHeader } from '../interfaces';

interface Props {
  children?: ReactNode;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  jwtHeader: JwtHeader | undefined;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue>({
  isLoggedIn: false,
  jwtHeader: undefined,
  onLogin: async () => {},
  onLogout: async () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [jwtHeader, setJwtHeader] = React.useState<JwtHeader | undefined>(undefined);

  const handleLogin = async () => {
    //TODO handle login logic with http request here
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJleHAiOjE2NzM2NjYxNzN9.KbFSTdNBf-5pZOD_uIFP-Ja6-e74q8MNfEiNpEwXP6c';
    setIsLoggedIn(true);
    setJwtHeader({ jwt: token });
  };

  const handleLogout = async () => {
    //TODO handle logout logic with http request here
    setIsLoggedIn(false);
    setJwtHeader(undefined);
  };

  const value = {
    isLoggedIn,
    jwtHeader,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
