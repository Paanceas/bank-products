import React from 'react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { logout } = useAuth();

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={logout}
        className="py-2 px-4 bg-red-500 rounded-md hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;
