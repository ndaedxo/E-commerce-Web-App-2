
import axios from 'axios';

// Authentication Service
export const authService = {
  login: async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', { email, password });
    return response.data;
  },
  logout: async () => {
    await axios.post('/api/auth/logout');
  },
  register: async (userData: object) => {
    const response = await axios.post('/api/auth/register', userData);
    return response.data;
  },
};
