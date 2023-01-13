import React, { ReactNode } from 'react';
import { JwtHeader } from '../interfaces';
import { useQuery } from 'react-query';
import { queryKeys } from '../api/queryKeys';
import { logIn } from '../api/admin/adminApiFunctions';

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
  const { data } = useQuery(queryKeys.login, logIn);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [jwtHeader, setJwtHeader] = React.useState<JwtHeader | undefined>(undefined);

  const token = data?.token;

  //TODO pass username and password from form

  const handleLogin = async () => {
    if (token) {
      setIsLoggedIn(true);
      setJwtHeader({ jwt: token });
    }
  };

  const handleLogout = async () => {
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
