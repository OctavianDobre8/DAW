<template>
    <div class="gallery-container">
      <div class="controls">
        <button @click="prevImage" class="control-button">Previous</button>
        <button @click="nextImage" class="control-button">Next</button>
      </div>
      <div class="gallery-content">
        <img 
          :src="currentTeamMember.imageUrl" 
          :alt="currentTeamMember.role"
          @error="handleImageError"
          v-if="!loading"
          class="gallery-image"
        >
        <div v-if="loading" class="loading">Loading...</div>
        <div class="image-caption">
          <h3>{{ currentTeamMember.name }}</h3>
          <p>{{ currentTeamMember.role }}</p>
        </div>
      </div>
      <div class="thumbnails">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          :class="['thumbnail-container', { active: index === currentIndex }]"
          @click="setImage(index)"
        >
          <img 
            :src="member.imageUrl"
            :alt="member.role"
            class="thumbnail"
          >
          <span class="thumbnail-role">{{ member.role }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageGallery',
    data() {
      return {
        currentIndex: 0,
        loading: false,
        teamMembers: [
          {
            name: 'Jordan R. Whitmore',
            role: 'CEO',
            imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'CEO portrait'
          },
          {
            name: 'Alexandra K. Bennett',
            role: 'CFO',
            imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'CFO portrait'
          },
          {
            name: 'Mike Johnson',
            role: 'Lead Developer',
            imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Lead Developer portrait'
          },
          {
            name: 'Sophia Harper',
            role: 'Financial Advisor',
            imageUrl: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Financial Advisor portrait'
          }
        ]
      }
    },
    computed: {
      currentTeamMember() {
        return this.teamMembers[this.currentIndex];
      }
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
      },
      setImage(index) {
        this.currentIndex = index;
      },
      handleImageError(e) {
        e.target.src = 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800';
      }
    }
  }
  </script>
  
  <style>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.gallery-content {
  position: relative;
  margin: 20px 0;
  min-height: 600px;
  background: #f3f4f6;
  border-radius: 12px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 600px;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: #fff;
  padding: 20px;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  color: #6b7280;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  backdrop-filter: blur(5px);
}

.image-caption h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.image-caption p {
  margin: 8px 0 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.control-button {
  padding: 12px 24px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.control-button:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.control-button:active {
  transform: translateY(0);
}

.thumbnails {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  overflow-x: auto;
  padding: 15px 0;
  scrollbar-width: thin;
  scrollbar-color: #4f46e5 #f3f4f6;
}

.thumbnails::-webkit-scrollbar {
  height: 6px;
}

.thumbnails::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.thumbnails::-webkit-scrollbar-thumb {
  background: #4f46e5;
  border-radius: 3px;
}

.thumbnail-container {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.thumbnail-container:hover {
  transform: translateY(-5px);
}

.thumbnail {
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.thumbnail-container.active .thumbnail {
  opacity: 1;
  border: 3px solid #4f46e5;
  transform: scale(1.05);
}

.thumbnail-role {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 0.9rem;
  padding: 8px;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  backdrop-filter: blur(5px);
}

@media (max-width: 768px) {
  .gallery-content {
    min-height: 400px;
  }
  
  .gallery-image {
    height: 400px;
  }
  
  .thumbnail {
    width: 140px;
    height: 90px;
  }
}
</style>