import { Product } from "../types/types";
import axios from "./axiosConfig";

export const getProductsByClient = async (
  clientType: string,
  clientId: string
) => {
  const response = await axios.get<Product[]>("/products", {
    params: { clientType, clientId },
  });
  return response.data;
};

export const createProduct = async (product: Product) => {
  const response = await axios.post<Product>("/products", product);
  return response.data;
};

export const updateProduct = async (id: string, product: Product) => {
  const response = await axios.put<Product>(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};
