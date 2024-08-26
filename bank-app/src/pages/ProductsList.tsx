import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByClient, createProduct, updateProduct, deleteProduct } from '../api/productApi';
import { Product } from '../types/types';
import Header from '../components/Header';
import { ClientType } from '../types/ClientType';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const clientId = searchParams.get('clientId') || '';
  const clientType = searchParams.get('clientType') as ClientType || ClientType.CC;

  useEffect(() => {
    if (clientId && clientType) {
      fetchProducts();
    }
  }, [clientId, clientType]);

  const fetchProducts = async () => {
    try {
      const response = await getProductsByClient(clientType, clientId);
      setProducts(response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProductId) {
        await updateProduct(editingProductId, { name, type, accountNumber, clientId, clientType });
        setEditingProductId(null);
      } else {
        await createProduct({ name, type, accountNumber, clientId, clientType });
      }
      fetchProducts();
      setName('');
      setType('');
      setAccountNumber('');
    } catch (error) {
      console.error('Error creating/updating product:', error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProductId(product._id || null);
    setName(product.name);
    setType(product.type);
    setAccountNumber(product.accountNumber);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-8">
      <Header title="Dashboard" />
      <h1 className="text-3xl font-bold mb-2">Productos del Cliente</h1>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Tipo de Cliente:</strong> {clientType} | <strong>ID del Cliente:</strong> {clientId}
      </p>
      <form onSubmit={handleCreateOrUpdate} className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="px-3 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Tipo"
          className="px-3 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Número de Cuenta"
          className="px-3 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="col-span-2 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {editingProductId ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
        {products.length === 0 ? (
          <p className="text-gray-700">No hay productos disponibles para este cliente.</p>
        ) : (
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product._id} className="p-4 bg-white rounded-lg shadow">
                <p><strong>Nombre:</strong> {product.name}</p>
                <p><strong>Tipo:</strong> {product.type}</p>
                <p><strong>Número de Cuenta:</strong> {product.accountNumber}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="mr-2 py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product._id!)}
                    className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
