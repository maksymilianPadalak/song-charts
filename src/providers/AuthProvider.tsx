import React, { ReactNode } from 'react';
import { JwtHeader } from '../interfaces';

interface Props {
  children?: ReactNode;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  jwtHeader: JwtHeader | undefined;
  onLogIn: (token: string) => void;
  onLogout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue>({
  isLoggedIn: false,
  jwtHeader: undefined,
  onLogIn: () => {},
  onLogout: async () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [jwtHeader, setJwtHeader] = React.useState<JwtHeader | undefined>(undefined);

  const handleLogin = async (token: string) => {
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
    onLogIn: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
