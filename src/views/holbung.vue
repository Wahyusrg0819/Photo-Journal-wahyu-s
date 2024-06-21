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
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-6" v-for="(image, index) in galleryImages" :key="index">
          <a :href="image.url" data-fancybox="gallery">
            <div class="card mb-4 shadow-sm">
              <img :src="image.url" class="img-fluid" :alt="'Gambar ' + (index + 1)">
            </div>
          </a>
        </div>
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
  margin: 5%;
  font-size: small;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

.img-fluid {
  width: 100%;
  height: auto;
}

@media (max-width: 576px) {
  .img-fluid {
    max-height: 150px; /* Adjust the height as needed for mobile */
    object-fit: cover;
  }
}
</style>
