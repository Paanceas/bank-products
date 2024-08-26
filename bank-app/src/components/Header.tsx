import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { logout } = useAuth();

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={() => logout()}
        className="py-2 px-4 bg-red-600 rounded hover:bg-red-700 flex items-center"
      >
        <FaSignOutAlt className="mr-2" />
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;
