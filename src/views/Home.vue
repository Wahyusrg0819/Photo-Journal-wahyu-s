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
    <div class="body-home">
      <main>
        <div class="rows">
          <div class="full-height row justify-evenly">
            <section class="container-nav">
              <div class="wrapper">
                <h3>Photo</h3>
                <ol>
                  <li v-for="(item, index) in photoItems" :key="index" @click="navigate(item.route)">
                    <span>{{ item.label }}</span>
                    <span>{{ item.date }}</span>
                  </li>
                  <a class="a" @click="navigateToGallery">More...</a>
                </ol>
              </div>
            </section>
            <div class="q-pa-md">
              <q-carousel animated v-model="slide" arrows infinite class="custom-carousel">
                <q-carousel-slide v-for="(image, index) in photoCarouselImages" :key="index" :name="index + 1" :img-src="image.url" />
              </q-carousel>
            </div>
          </div>
          <div class="full-height row justify-evenly" id="div2">
            <section class="container-nav">
              <div class="wrapper">
                <h3>Artikel</h3>
                <ol>
                  <li v-for="(item, index) in articleItems" :key="index" @click="navigate(item.route)">
                    <span>{{ item.label }}</span>
                    <span>{{ item.date }}</span>
                  </li>
                  <a class="a" @click="navigateToBlog">More...</a>
                </ol>
              </div>
            </section>
            
            <div class="q-pa-md">
              <q-carousel 
              animated 
              v-model="slide" 
              autoslide="true"
              transition="fade"
              :interval="2" 
              :autoplay="true" 
              :autoplay-hover="true" 
              :autoplay-pause-on-hover="true" 
              :autoplay-pause-on-last-slide="true"
              arrows 
              infinite 
              class="custom-carousel"
              >
              
              
                <q-carousel-slide 
                v-for="(image, index) in articleCarouselImages" 
                :key="index" 
                :name="index + 1" 
                :img-src="image.url" 
                
                />
                
              </q-carousel>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Import useRouter from vue-router
  
  export default {
    name: 'Navbar',
    setup() {
      const router = useRouter(); // Obtain router instance
      const selectedMenu = ref('Home');
  
      const menus = [
        { label: 'Home', to: '/' },
      ];
  
      const photoItems = [
        { label: 'Huta Holbung', date: '10-Juni-2024', route: '/holbung' },
        { label: 'Medan', date: '10-Juni-2024', route: '/medan' },
        { label: 'Jepang', date: '10-Juni-2024', route: '/jepang' },
        { label: 'Jakarta', date: '10-Juni-2024', route: '/jakarta' },
        { label: 'PekanBaru', date: '10-Juni-2024', route: '/pekanbaru' }
      ];
  
      const articleItems = [
        { label: 'Huta Holbung', date: '10-Juni-2024', route: '/holbung' },
        { label: 'Medan', date: '10-Juni-2024', route: '/medan' },
        { label: 'Jepang', date: '10-Juni-2024', route: '/jepang' },
        { label: 'Jakarta', date: '10-Juni-2024', route: '/jakarta' },
        { label: 'PekanBaru', date: '10-Juni-2024', route: '/pekanbaru' }
      ];
  
      const photoCarouselImages = [
        { url: '/images/foto11.jpg' },
        { url: '/images/foto2.jpg' },
        { url: '/images/foto3.jpg' },
        { url: '/images/foto4.jpg' }
      ];
  
      const articleCarouselImages = [
        { url: '/images/foto12.jpg' },
        { url: '/images/foto5.jpg' },
        { url: '/images/foto6.jpg' },
        { url: '/images/foto7.jpg' },
        { url: '/images/foto8.jpg' }
      ];
  
      const slide = ref(1);
      const autoplay = ref(true);
  
      const navigate = (route) => {
        router.push(route); // Use router instance to navigate
        setActiveMenu(route.substring(1)); // Assuming route starts with '/'
      };
  
      const setActiveMenu = (menu) => {
        selectedMenu.value = menu;
      };
  
      const navigateToGallery = () => {
        router.push('/gallery'); // Use router instance to navigate
        setActiveMenu('Galeri');
      };
  
      const navigateToBlog = () => {
        router.push('/blog'); // Use router instance to navigate
        setActiveMenu('Blog');
      };
  
      return {
        selectedMenu,
        menus,
        photoItems,
        articleItems,
        photoCarouselImages,
        articleCarouselImages,
        slide,
        autoplay,
        navigate,
        navigateToGallery,
        navigateToBlog,
      };
    },
  };
  </script>
  
<style scoped>

.a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
}

.a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px; /* Adjust the thickness of the line */
    background: black; /* Adjust the color of the line */
    transition: width 0.3s;
    margin-top: 2px; /* Adjust the distance between text and line */
}

.a:hover::after {
    width: 100%;
}

#div2{
    margin-top: 5%;
}

.custom-carousel {
    border-radius: 10px;
    box-shadow: 10px 15px 20px hsl(0, 0%, 60%), -10px -15px 20px #ffffff;
    transition: transform 0.3s ease-in;
  transition: transform 0.3s ease-out;
}

.custom-carousel:hover {
    transform: scale(1.04);
}

.q-pa-md {
    min-width: 700px; 
    max-width: 700px;
    border-radius: 15%;
}

.container-nav {
    overflow: auto; 
    min-width: 350px; 
    max-width: 350px;
}

.q-breadcrumbs {
    margin-left: 14%;
    margin-right: 5%;
    cursor: pointer;
    font-family: roboto mono;
}


.body-home {
    margin: 2%;
}

@media (max-width: 768px) {
    .q-pa-md {
        min-width: auto;
        max-width: auto;
        border-radius: 0;
    }
    .body-home {
    margin: 4%;
    }

    .container-nav {
        min-width: auto;
        max-width: auto;
        overflow-x: auto;
    }
}

@media (max-width: 480px) {
    .body-home {
        
        font-size: smaller;
    }
    .q-pa-md {
        min-width: auto;
        max-width: auto;
        border-radius: 0;
    }

    .container-nav {
        min-width: auto;
        max-width: auto;
        overflow-x: auto;
    }
}

h3{
    margin-top: -1px;
    font-size: 30px;
    font-family:Roboto Mono ;
    font-weight: 800;
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: clamp(1rem, 2vw, 3rem);
	font-size: 1.1rem;
}

a {
	color: inherit;
}

.wrapper {
	max-width: 80rem;
	margin: 0 auto;
}

ol {
    margin-top: -10%;
	padding: 1.5rem 1.5rem 1.5rem 4em;
	columns: 25rem;
	column-gap: 7rem;
	column-rule: 4px dotted turquoise;
}

ol > * + * {
	margin-top:1rem;
}

li {
	break-inside: avoid;
    font-family:Roboto Mono ;
    font-weight: 800;
    cursor: pointer;
    margin-bottom :5%;
}

li::after {
    content: '';
    display: block;
    width: 0;
    height: 2px; /* Adjust the thickness of the line */
    background: black; /* Adjust the color of the line */
    transition: width 0.3s;
    margin-top: 2px; /* Adjust the distance between text and line */
}

li:hover::after {
    width: 100%;
}

::marker {
	content: counters(list-item, '') ': ';
	font-weight: 700;
	font-size: 1.5em;
	color: black;
}

li span {
	display: block;
}

li span:first-child {
	font-size: 1.5em;
}

li span:last-child {
	font-style: normal;
}

.divider {
	min-height: 6rem;
	background: lavender;
}
</style>
  