<template>
    <footer class="footer mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>About Us</h5>
            <p>A brief description of your company or website goes here.</p>
          </div>
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contact Info</h5>
            <ul class="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #1e293b;
    color: #fff;
    padding: 3rem 0 1rem;
  }
  
  .footer h5 {
    color: #fff;
    margin-bottom: 1.5rem;
  }
  
  .footer a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer a:hover {
    color: #fff;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    text-align: center;
  }
  </style>