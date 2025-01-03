<template>
    <div class="testimonial-slider">
      <div class="slider-container">
        <transition-group name="fade">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            v-show="currentIndex === index"
            class="testimonial-card"
          >
            <div class="industry-badge">{{ testimonial.industry }}</div>
            <div class="quote-content">
              <blockquote>{{ testimonial.quote }}</blockquote>
            </div>
            <div class="client-info">
              <img :src="testimonial.image" :alt="testimonial.name">
              <div class="client-details">
                <cite>{{ testimonial.name }}</cite>
                <span>{{ testimonial.position }}</span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
      
      <div class="slider-controls">
        <button @click="prevSlide" class="control-button">&larr;</button>
        <div class="slider-dots">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="setSlide(index)"
            :class="['dot', { active: currentIndex === index }]"
          ></button>
        </div>
        <button @click="nextSlide" class="control-button">&rarr;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialSlider',
    data() {
      return {
        currentIndex: 0,
        testimonials: [
  {
    id: 1,
    quote: "The strategic insights provided helped us expand into three new markets within a year.",
    name: "Robert Anderson",
    position: "CEO, TechGrowth Solutions",
    industry: "Technology",
    image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg"
  },
  {
    id: 2,
    quote: "Their financial advisory transformed our revenue model completely.",
    name: "Emily Chen",
    position: "CFO, Global Manufacturing Inc",
    industry: "Manufacturing",
    image: "https://images.pexels.com/photos/4350223/pexels-photo-4350223.jpeg"
  },
  {
    id: 3,
    quote: "Digital transformation expertise that delivered real results - 40% efficiency increase.",
    name: "David Martinez",
    position: "COO, Retail Solutions Co",
    industry: "Retail",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
  },
  {
    id: 4,
    quote: "Outstanding strategic planning that helped us secure Series B funding.",
    name: "Sophie Williams",
    position: "Founder, HealthTech Innovations",
    industry: "Healthcare",
    image: "https://images.pexels.com/photos/4350115/pexels-photo-4350115.jpeg"
  },
  {
    id: 5,
    quote: "Their risk management strategy saved us millions in potential losses.",
    name: "James Wilson",
    position: "Director, Financial Services Ltd",
    industry: "Finance",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
  },
  {
    id: 6,
    quote: "Transformed our startup into a market leader within 18 months.",
    name: "Lisa Kumar",
    position: "CEO, AI Solutions",
    industry: "Artificial Intelligence",
    image: "https://images.pexels.com/photos/4350076/pexels-photo-4350076.jpeg"
  },
  {
    id: 7,
    quote: "Their consulting expertise helped us optimize our supply chain efficiency by 35%.",
    name: "Michael Chang",
    position: "Operations Director, Global Logistics",
    industry: "Supply Chain",
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg"
  },
  {
    id: 8,
    quote: "Revolutionary approach to sustainable business practices increased our market share.",
    name: "Sarah O'Connor",
    position: "CEO, EcoSolutions Group",
    industry: "Sustainability",
    image: "https://images.pexels.com/photos/4350128/pexels-photo-4350128.jpeg"
  }
]
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      },
      setSlide(index) {
        this.currentIndex = index;
      }
    }
  }
  </script>
  
  <style scoped>
  .testimonial-slider {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
  }
  
  .slider-container {
    position: relative;
    min-height: 400px;
  }
  
  .testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .quote-content {
    position: relative;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .quote-content::before,
  .quote-content::after {
    content: '"';
    font-family: Georgia, serif;
    font-size: 4rem;
    color: #4f46e5;
    opacity: 0.2;
    position: absolute;
  }
  
  .quote-content::before {
    top: -1rem;
    left: -1rem;
  }
  
  .quote-content::after {
    bottom: -2rem;
    right: -1rem;
    transform: rotate(180deg);
  }
  
  .industry-badge {
    position: absolute;
    top: -12px;
    right: 2rem;
    background: #4f46e5;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    z-index: 1;
  }
  
  .client-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    border-top: 1px solid #e5e7eb;
    padding-top: 1.5rem;
  }
  
  .client-info img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #4f46e5;
  }
  
  .client-details cite {
    display: block;
    font-style: normal;
    font-weight: 600;
    color: #1f2937;
    font-size: 1.1rem;
  }
  
  .client-details span {
    color: #6b7280;
    font-size: 0.9rem;
  }
  
  .slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .control-button {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .control-button:hover {
    transform: scale(1.1);
    background: #4338ca;
  }
  
  .slider-dots {
    display: flex;
    gap: 0.5rem;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e5e7eb;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background: #4f46e5;
    transform: scale(1.2);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>