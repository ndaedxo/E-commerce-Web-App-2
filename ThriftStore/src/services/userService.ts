import axios from 'axios';
import { api } from '../utils/api';

// User Service
export const userService = {
  getUserProfile: async (userId: string) => {
    const response = await api.fetchUser(userId);
    return response.data;
  },
  updateUserProfile: async (userId: string, userData: object) => {
    const response = await axios.put(`/api/users/${userId}`, userData);
    return response.data;
  },
};
