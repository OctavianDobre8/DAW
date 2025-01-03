<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <strong>MyBrand</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
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
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

.nav-link {
  color: #333;
  font-weight: 500;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2563eb;
}

.router-link-active {
  color: #2563eb;
}

.navbar-brand {
  color: #2563eb;
  font-size: 1.5rem;
}
</style>