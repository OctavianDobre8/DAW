// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://type.fit/api',
});

export const fetchQuotes = async () => {
  const response = await api.get('/quotes');
  return response.data;
};
