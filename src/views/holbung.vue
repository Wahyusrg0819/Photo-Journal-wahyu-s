<template>
  <q-breadcrumbs gutter="xs">
    <q-breadcrumbs-el 
      v-for="menu in menus"
      :key="menu.label"
      :to="menu.to"
      :label="menu.label"
      :class="{ 'active': selectedMenu === menu.label }"
      @click.native="setActiveMenu(menu.label)" 
    />
  </q-breadcrumbs>
  <div class="body-holbung">
    <div class="grid-container">
      <div class="grid-item" v-for="(image, index) in galleryImages" :key="index">
        <a :href="image.url" data-fancybox="gallery">
          <div class="card">
            <img :src="image.url" class="mb-4" :alt="'Gambar ' + (index + 1)">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'; 

export default {
  setup() {
    const selectedMenu = ref('Home'); 
    
    const menus = [
      { label: 'Home', to: '/' },
      { label: 'Galeri', to: '/gallery' },
      { label: 'Holbung', to: '/holbung' }
    ];

    const galleryImages = [
      { url: '/images/foto1.jpg' },
      { url: '/images/foto2.jpg' },
      { url: '/images/foto3.jpg' },
      { url: '/images/foto4.jpg' },
      { url: '/images/foto5.jpg' },
      { url: '/images/foto6.jpg' },
      { url: '/images/foto7.jpg' },
      { url: '/images/foto8.jpg' },
      { url: '/images/foto9.jpg' },
      { url: '/images/foto10.jpg' }
    ];

    const setActiveMenu = (menu) => {
      selectedMenu.value = menu;
    };

    return {
      selectedMenu,
      menus,
      galleryImages,
      setActiveMenu
    };
  },
};
</script>


<style scoped>
.q-breadcrumbs {
  margin-left: 14%;
  margin-right: 5%;
  cursor: pointer;
}

.body-holbung {
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
}

.grid-container {
  column-count: 5;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fill, 
  minmax(150px, 1fr));
  width: 100%;
}

.grid-item {
  break-inside: avoid;
  margin-bottom: 20px;
}

.card {
  overflow: hidden;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

.img-fluid {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1200px) {
  .grid-container {
    column-count: 5;
  }
}

@media (max-width: 992px) {
  .grid-container {
    column-count: 4;
  }
}

@media (max-width: 768px) {
  .grid-container {
    column-count: 3;
  }
}

@media (max-width: 576px) {
  .grid-container {
    column-count: 2;
  }
  .img-fluid {
    max-height: 150px;
    object-fit: cover;
  }
}
</style>
