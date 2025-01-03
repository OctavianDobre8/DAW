<!-- In src/views/ServicesPage.vue -->
<template>
  <div>
    <header>
      <h1 class="text-center">Our Services</h1>
    </header>
    <section class="services-grid">
      <article class="service-card" v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </section>
    
    <!-- Add a table for pricing -->
    <section class="pricing-section">
      <h2>Pricing</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add your pricing data -->
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, title: 'Web Design', description: 'Custom web design services' },
        { id: 2, title: 'Development', description: 'Full-stack development' },
        { id: 3, title: 'SEO', description: 'Search engine optimization' }
      ]
    }
  }
}
</script>