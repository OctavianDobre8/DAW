<template>
  <div>
    <section class="hero-section">
      <h1>Strategic Business Consulting</h1>
      <p class="lead">Transforming Challenges into Growth Opportunities</p>
      <router-link to="/contact" class="cta-button">Schedule a Consultation</router-link>
    </section>

    <section class="quote-section">
      <div v-if="loading" class="loading">Loading inspiration...</div>
      <div v-else-if="quote" class="quote-container">
        <blockquote>
          <p>"{{ quote.text }}"</p>
          <footer>— {{ quote.author }}</footer>
        </blockquote>
      </div>
    </section>

    <section class="services-overview">
      <h2>Our Expertise</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Strategic Planning</h3>
          <p>Develop comprehensive growth strategies tailored to your business</p>
        </div>
        <div class="service-card">
          <h3>Financial Advisory</h3>
          <p>Expert financial guidance and risk management solutions</p>
        </div>
        <div class="service-card">
          <h3>Digital Transformation</h3>
          <p>Modernize your operations with cutting-edge technology</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>Client Success Stories</h2>
      <TestimonialSlider />
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TestimonialSlider from '@/components/TestimonialSlider.vue';
import { fetchQuotes } from '@/utils/api';

export default {
  name: 'HomePage',
  components: {
    TestimonialSlider
  },
  setup() {
    const quote = ref(null);
    const loading = ref(true);

    onMounted(async () => {
      try {
        quote.value = await fetchQuotes();
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      quote,
      loading
    };
  }
}
</script>

<style scoped>
.hero-section {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(rgba(79, 70, 229, 0.1), rgba(79, 70, 229, 0.05));
  border-radius: 12px;
  margin-bottom: 3rem;
}

.quote-section {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
}

.quote-container blockquote {
  font-size: 1.5rem;
  color: #1f2937;
  font-style: italic;
  margin: 0;
  padding: 0;
}

.quote-container footer {
  margin-top: 1rem;
  color: #6b7280;
  font-size: 1.1rem;
}

.loading {
  color: #6b7280;
  font-style: italic;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}
</style>