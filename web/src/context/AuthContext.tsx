import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setdata] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoFinances:token');
    const user = localStorage.getItem('@GoFinances:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@GoFinances:token', token);
    localStorage.setItem('@GoFinances:user', JSON.stringify(user));

    setdata({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoFinances:token');
    localStorage.removeItem('@GoFinances:user');

    setdata({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('error');
  }

  return context;
}

export { AuthProvider, useAuth };
