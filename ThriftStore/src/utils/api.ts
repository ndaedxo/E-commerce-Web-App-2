// ThriftStore\src\utils\api.ts
import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000, // 10 seconds timeout
});

// API Utilities
export const api = {
  fetchProducts: async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
  },
  fetchUser: async (userId: string) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  },
  postOrder: async (orderData: object) => {
    const response = await axiosInstance.post('/orders', orderData);
    return response.data;
  },
  fetchOrders: async () => {
    const response = await axiosInstance.get('/orders');
    return response.data;
  },
  fetchUserProfile: async (userId: string) => {
    const response = await axiosInstance.get(`/users/${userId}/profile`);
    return response.data;
  },
  updateUserProfile: async (userId: string, data: object) => {
    const response = await axiosInstance.put(`/users/${userId}/profile`, data);
    return response.data;
  },
  searchProducts: async (query: string) => { // Add this method
    const response = await axiosInstance.get(`/products/search`, {
      params: { query }
    });
    return response.data;
  }
};

export default axiosInstance;
