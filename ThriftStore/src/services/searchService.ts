import axios from 'axios';

// Search Service
export const searchService = {
  searchProducts: async (query: string) => {
    const response = await axios.get(`/api/products/search`, { params: { query } });
    return response.data;
  },
};
