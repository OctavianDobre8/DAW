<!-- src/views/Home.vue -->
<template>
  <div>
    <h1 class="text-center">Welcome to My Website</h1>
    

    <div v-if="loading" class="text-center">
      <p class="text-center">Fetching motivational quotes...</p>
    </div>
    <div v-else>
      <blockquote v-for="quote in quotes.slice(0, 3)" :key="quote.text" class="blockquote">
        <p>"{{ quote.text }}"</p>
        <footer class="blockquote-footer">{{ quote.author || 'Unknown' }}</footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
import { fetchQuotes } from '../utils/api';

export default {
  name: 'HomePage',
  data() {
    return {
      quotes: [],
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      this.quotes = await fetchQuotes();
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>