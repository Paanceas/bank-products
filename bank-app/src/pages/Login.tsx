import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Iniciar Sesión</h2>
        <button
          onClick={() => loginWithRedirect()}
          className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Iniciar Sesión con Auth0
        </button>
      </div>
    </div>
  );
};

export default Login;
