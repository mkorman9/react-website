import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export interface AuthContextType {
  principal: User | null;
}

const AuthContext = createContext<AuthContextType>({
  principal: null
});

export const AuthProvider = (props: PropsWithChildren<unknown>) => {
  const [principal, setPrincipal] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setPrincipal(user);
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
