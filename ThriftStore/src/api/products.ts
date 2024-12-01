// src/api/products.ts
import axios from './axios'; // Import the configured axios instance
import { Product } from '../types/Product';

const API_URL = 'http://127.0.0.1:8000/products'; // Full endpoint URL for products

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the response data is an array of products
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error; // Re-throw error to be handled by the caller
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error('Failed to create product:', error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(`Failed to update product with ID ${id}:`, error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Failed to delete product with ID ${id}:`, error);
    throw error;
  }
};
