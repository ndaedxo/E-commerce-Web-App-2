// src/api/axios.ts works well
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Ensure this URL is correct
  timeout: 10000, // Timeout in milliseconds
});

// Optionally, you can set up interceptors here
instance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default instance;

