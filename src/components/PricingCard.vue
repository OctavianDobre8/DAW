<template>
  <div class="pricing-card" :class="{ 'featured': isFeatured }">
    <div class="pricing-header">
      <h3>{{ plan.name }}</h3>
      <div class="price">{{ plan.price }}</div>
    </div>
    <ul class="features">
      <li v-for="(feature, index) in plan.features" :key="index">
        {{ feature }}
      </li>
    </ul>
    <router-link 
      :to="{ path: '/contact', query: { plan: plan.name }}" 
      class="cta-button"
    >
      Get Started
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    plan: {
      type: Object,
      required: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.pricing-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.pricing-card.featured {
  transform: scale(1.05);
  border: 2px solid #4f46e5;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #4f46e5;
  margin: 1rem 0;
}

.features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.cta-button {
  display: block;
  padding: 1rem;
  background: #4f46e5;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
</style>