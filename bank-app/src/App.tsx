import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import SearchClient from './pages/SearchClient'; // Nueva pantalla de búsqueda de cliente
import ProductsList from './pages/ProductsList'; // Nueva pantalla de lista de productos

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} /> {/* Cambiar el redireccionamiento inicial a la búsqueda de cliente */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <SearchClient />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductsList />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
