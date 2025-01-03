<template>
  <div class="portfolio-container">
    <h1 class="section-title">Case Studies</h1>
    <p class="section-description">Discover how we've helped businesses transform and grow</p>
    
    <div class="case-studies-grid">
      <div v-for="study in caseStudies" :key="study.id" class="case-study-card">
        <img :src="study.image" :alt="study.title" class="case-study-image">
        <div class="case-study-content">
          <h3>{{ study.title }}</h3>
          <p class="industry">{{ study.industry }}</p>
          <p class="description">{{ study.description }}</p>
          <div class="results">
            <div v-for="(result, index) in study.results" :key="index" class="result-item">
              <span class="result-number">{{ result.number }}</span>
              <span class="result-label">{{ result.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      caseStudies: [
        {
          id: 1,
          title: 'Digital Transformation Success',
          industry: 'Manufacturing',
          description: 'Helped a manufacturing company modernize their operations through digital transformation.',
          image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg',
          results: [
            { number: '45%', label: 'Efficiency Increase' },
            { number: '2.5M', label: 'Cost Savings' }
          ]
        },
        {
          id: 2,
          title: 'Strategic Growth Initiative',
          industry: 'Technology',
          description: 'Developed and implemented growth strategy for a tech startup.',
          image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
          results: [
            { number: '300%', label: 'Revenue Growth' },
            { number: '5', label: 'New Markets' }
          ]
        },
        {
          id: 3,
          title: 'Financial Optimization',
          industry: 'Retail',
          description: 'Optimized financial operations for a retail chain.',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
          results: [
            { number: '28%', label: 'Profit Increase' },
            { number: '40%', label: 'Cost Reduction' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  color: #64748b;
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
}

.case-study-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.case-study-content {
  padding: 1.5rem;
}

.industry {
  color: #4f46e5;
  font-weight: 500;
  margin: 0.5rem 0;
}

.description {
  color: #64748b;
  margin: 1rem 0;
}

.results {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.result-item {
  text-align: center;
}

.result-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
}

.result-label {
  font-size: 0.875rem;
  color: #64748b;
}
</style>