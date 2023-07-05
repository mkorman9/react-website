import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = (props: PropsWithChildren<unknown>) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user as User);
      setIsAuthenticated(!!user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
