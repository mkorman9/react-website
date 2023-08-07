import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export interface AuthContextType {
  principal?: User;
}

const AuthContext = createContext<AuthContextType>({});

export const AuthProvider = (props: PropsWithChildren<unknown>) => {
  const [principal, setPrincipal] = useState<User | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setPrincipal(user || undefined);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        principal
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
