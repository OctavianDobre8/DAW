<!-- src/components/Gallery.vue -->
<template>
  <div class="row">
    <div v-for="item in images" :key="item" class="col-md-4 mb-4">
      <div class="card">
        <img :src="item" class="card-img-top" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/FF0000',
        'https://via.placeholder.com/150/00FF00',
      ],
    };
  },
};
</script>
