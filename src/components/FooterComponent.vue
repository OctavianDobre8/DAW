<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Prism Advisory</h3>
          <p>Transforming businesses through strategic consulting, digital innovation, and financial expertise. Our multifaceted approach delivers sustainable growth and measurable results for organizations worldwide.</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><router-link to="/services">Strategic Planning</router-link></li>
              <li><router-link to="/services">Financial Advisory</router-link></li>
              <li><router-link to="/services">Digital Transformation</router-link></li>
              <li><router-link to="/services">Business Analytics</router-link></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/portfolio">Case Studies</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          
          <div class="footer-section">
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1f2937;
  color: #f3f4f6;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-section h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.75rem;
}

.footer-section a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>