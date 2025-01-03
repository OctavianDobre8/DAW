<template>
  <div class="services-container">
    <header class="services-header">
      <h1>Our Services</h1>
      <p>Comprehensive consulting solutions to drive your business forward</p>
    </header>

    <section class="services-grid">
      <ServiceCard 
        v-for="service in services" 
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :features="service.features"
        :icon="service.icon"
      />
    </section>

    <section class="pricing-section">
      <h2>Consulting Packages</h2>
      <div class="pricing-grid">
        <PricingCard
          v-for="plan in plans"
          :key="plan.name"
          :plan="plan"
          :isFeatured="plan.name === 'Professional'"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';
import PricingCard from '@/components/PricingCard.vue';

export default {
  components: {
    ServiceCard,
    PricingCard
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Strategic Planning',
          description: 'Develop comprehensive business strategies',
          features: ['Market Analysis', 'Competitive Positioning', 'Growth Planning'],
          icon: 'trending_up'
        },
        {
          id: 2,
          title: 'Financial Advisory',
          description: 'Expert financial guidance and planning',
          features: ['Risk Management', 'Investment Strategy', 'Financial Planning'],
          icon: 'attach_money'
        },
        {
          id: 3,
          title: 'Digital Transformation',
          description: 'Modernize your business operations',
          features: ['Process Optimization', 'Technology Integration', 'Digital Strategy'],
          icon: 'rocket_launch'
        }
      ],
      plans: [
        {
          name: 'Starter',
          price: '$2,000/month',
          features: [
            'Basic Consulting',
            '10 Hours Support',
            'Monthly Reports',
            'Email Support'
          ]
        },
        {
          name: 'Professional',
          price: '$5,000/month',
          features: [
            'Advanced Consulting',
            '30 Hours Support',
            'Weekly Reports',
            'Priority Support'
          ]
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Full Service Suite',
            'Unlimited Support',
            'Daily Reports',
            'Dedicated Consultant'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-icon {
  font-size: 2rem;
  color: #4f46e5;
  margin-bottom: 1rem;
}
</style>