import React, { createContext, useContext, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const storeToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          localStorage.setItem('authToken', token);
        } catch (error) {
          console.error('Error getting token:', error);
        }
      }
    };

    storeToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginWithRedirect, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
