import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientType } from '../types/ClientType';

const SearchClient: React.FC = () => {
  const [clientId, setClientId] = useState('');
  const [clientType, setClientType] = useState<ClientType>(ClientType.CC);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientId && clientType) {
      navigate(`/products?clientType=${clientType}&clientId=${clientId}`);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Buscar Cliente</h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <select
            value={clientType}
            onChange={(e) => setClientType(e.target.value as ClientType)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value={ClientType.CC}>Cédula de ciudadanía</option>
            <option value={ClientType.CE}>Cédula de extranjería</option>
            <option value={ClientType.NIT}>Número de Identificación Tributaria</option>
          </select>
          <input
            type="text"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="Número de Documento"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchClient;
