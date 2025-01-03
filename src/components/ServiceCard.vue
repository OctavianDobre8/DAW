<template>
  <div class="service-card">
    <div class="service-icon">
      <span class="material-icons">{{ icon }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <ul class="feature-list">
      <li v-for="(feature, index) in features" :key="index">
        <span class="material-icons check">check_circle</span>
        {{ feature }}
      </li>
    </ul>
    <router-link :to="{ path: '/contact', query: { service: title }}" class="service-cta">
      Learn More
      <span class="material-icons">arrow_forward</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
  background: #f3f4f6;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.service-icon .material-icons {
  font-size: 32px;
  color: #4f46e5;
}

h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex-grow: 1;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}

.feature-list .material-icons.check {
  font-size: 1.25rem;
  color: #4f46e5;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #4f46e5;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
}

.service-cta:hover {
  background: #4338ca;
  transform: translateX(5px);
}

.service-cta .material-icons {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.service-cta:hover .material-icons {
  transform: translateX(3px);
}
</style>