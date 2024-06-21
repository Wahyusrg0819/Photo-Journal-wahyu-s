<template>
    <div >
      <h1>Gallery Example</h1>
      <div class="row">
        <a v-for="(image, index) in images" :key="index" :href="image.src">
            <div class="card mb-4 shadow-sm">
          <img :src="image.thumbnail" alt="Thumbnail" class="col-md-3" />
        </div>
        </a>
    </div>
    </div>
  </template>
  
  <script>
  // Import lightGallery
  import lg from 'lightgallery';
  import 'lightgallery/css/lightgallery.css'; // Import CSS lightGallery
  
  export default {
    name: 'App',
    data() {
      return {
        images: [
          { src: '/images/foto1.jpg', thumbnail: '/images/foto1.jpg' },
          { src: '/images/foto2.jpg', thumbnail: '/images/foto2.jpg' },
          { src: '/images/foto3.jpg', thumbnail: '/images/foto3.jpg' },
          { src: '/images/foto4.jpg', thumbnail: '/images/foto4.jpg' },
          { src: '/images/foto5.jpg', thumbnail: '/images/foto5.jpg' },
          { src: '/images/foto6.jpg', thumbnail: '/images/foto6.jpg' },
          { src: '/images/foto7.jpg', thumbnail: '/images/foto7.jpg' },
        ]
      };
    },
    mounted() {
      // Inisialisasi lightGallery setelah komponen dimuat
      this.initLightGallery();
    },
    methods: {
      initLightGallery() {
        // Gunakan ref untuk mengakses elemen gallery
        const galleryElement = this.$refs.gallery;
        
        // Inisialisasi lightGallery
        lg(galleryElement, {
          mode: 'lg-fade', // Mode transisi (opsional)
          speed: 500, // Kecepatan transisi (opsional)
          download: false, // Tombol unduh (opsional)
          thumbnail: true // Tampilkan thumbnail (opsional)
          // Tambahkan opsi lainnya sesuai kebutuhan
        });
      }
    }
  };
  </script>
  
