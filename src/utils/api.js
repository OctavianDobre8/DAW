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
    // Get all quotes first
    const response = await api.get('/quotes');
    const allQuotes = response.data.quotes;
    
    // Randomly select 3 unique quotes
    const randomQuotes = [];
    const usedIndexes = new Set();
    
    while (randomQuotes.length < 3 && usedIndexes.size < allQuotes.length) {
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      
      if (!usedIndexes.has(randomIndex)) {
        usedIndexes.add(randomIndex);
        randomQuotes.push({
          text: allQuotes[randomIndex].quote,
          author: allQuotes[randomIndex].author
        });
      }
    }
    
    return randomQuotes;
  } catch (error) {
    console.warn('Using fallback quotes:', error);
    // Randomly select 3 fallback quotes
    return fallbackQuotes
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }
};

export default api;