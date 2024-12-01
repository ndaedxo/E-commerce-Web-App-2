import axios from 'axios';
import { api } from '../utils/api';

// Product Service
export const productService = {
  getProducts: async (filters: object = {}) => {
    const response = await api.fetchProducts(filters);
    return response.data;
  },
  getProductById: async (productId: string) => {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  },
};
