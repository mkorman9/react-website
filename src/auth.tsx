import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export interface AuthContextType {
  isAuthenticated: boolean;
  userId: string;
  userDisplayName: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = (props: PropsWithChildren<unknown>) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [userDisplayName, setUserDisplayName] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
        setUserDisplayName(user.displayName ?? '');
      } else {
        setUserId('');
        setUserDisplayName('');
      }

      setIsAuthenticated(!!user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        userDisplayName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
