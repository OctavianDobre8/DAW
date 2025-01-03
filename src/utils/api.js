import axios from 'axios';
import { fallbackQuotes } from './fallbackQuotes';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchQuotes = async () => {
  try {
    const response = await api.get('/quotes');
    const allQuotes = response.data.quotes;
    
    // Select one random quote
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return {
      text: allQuotes[randomIndex].quote,
      author: allQuotes[randomIndex].author
    };
  } catch (error) {
    console.warn('Using fallback quote:', error);
    // Select one random fallback quote
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  }
};

export default api;