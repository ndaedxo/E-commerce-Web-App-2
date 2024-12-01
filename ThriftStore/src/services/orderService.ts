import axios from 'axios';
import { api } from '../utils/api';

// Order Service
export const orderService = {
  createOrder: async (userId: string, orderData: object) => {
    const response = await api.postOrder(orderData);
    return response.data;
  },
  getOrderHistory: async (userId: string) => {
    const response = await axios.get(`/api/users/${userId}/orders`);
    return response.data;
  },
};
