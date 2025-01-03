<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p class="about-description">Meet our leadership team dedicated to your success.</p>
    <ImageGallery />
    
    <div class="achievements-section">
      <h2>Our Achievements</h2>
      <div class="achievement-input">
        <input 
          v-model="newAchievement" 
          @keyup.enter="addAchievement"
          placeholder="Add new achievement..."
          class="form-control"
        >
        <button @click="addAchievement" class="btn btn-primary ms-2">Add</button>
      </div>
      
      <transition-group name="list" tag="ul" class="achievements-list">
        <li v-for="(achievement, index) in achievements" 
            :key="achievement.id" 
            class="achievement-item">
          {{ achievement.text }}
          <button 
            @click="removeAchievement(index)" 
            class="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue';
import { ref } from 'vue';

export default {
  name: 'AboutPage',
  components: {
    ImageGallery
  },
  setup() {
    const achievements = ref([
      { id: 1, text: 'Named Top Financial Advisor 2023' },
      { id: 2, text: 'Expanded to 3 new markets' },
      { id: 3, text: 'Helped 1000+ clients achieve their goals' }
    ]);
    const newAchievement = ref('');
    let nextId = 4;

    const addAchievement = () => {
      if (newAchievement.value.trim()) {
        achievements.value.push({
          id: nextId++,
          text: newAchievement.value
        });
        newAchievement.value = '';
      }
    };

    const removeAchievement = (index) => {
      achievements.value.splice(index, 1);
    };

    return {
      achievements,
      newAchievement,
      addAchievement,
      removeAchievement
    };
  }
}
</script>

<style>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-description {
  text-align: center;
  color: #4b5563;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.achievements-section {
  margin-top: 3rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
}

.achievement-input {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
}

.achievement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>