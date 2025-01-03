<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span class="material-icons brand-icon">diamond</span>
        <strong>Prism Advisory</strong>
      </router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
        </ul>
        <router-link to="/contact" class="contact-btn">
          Get Started
          <span class="material-icons">arrow_forward</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.navbar {
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: #1f2937;
  text-decoration: none;
}

.brand-icon {
  color: #4f46e5;
  font-size: 2rem;
}

.nav-link {
  color: #4b5563;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #4f46e5;
}

.contact-btn {
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
}

.contact-btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.contact-btn .material-icons {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.contact-btn:hover .material-icons {
  transform: translateX(3px);
}

@media (max-width: 991px) {
  .navbar-collapse {
    padding: 1rem 0;
  }
  
  .contact-btn {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
}
</style>