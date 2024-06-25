<template>
  <q-breadcrumbs gutter="xs">
    <q-breadcrumbs-el 
      v-for="item in breadcrumbs" 
      :key="item.label"
      :to="item.to"
      :label="item.label" 
      :class="{ 'active': selectedMenu === item.label }"
      @click.native="setActiveMenu(item.label)" 
    />
  </q-breadcrumbs>

  <div class="body-galeri">
    <main>
      <div class="wrapper">
        <ol auto start="8">
          <li 
            v-for="(item, index) in galleryItems" 
            :key="index"
            @click="item.onClick && item.onClick()"
          >
            <img 
            :src="item.imgSrc" 
            :alt="item.imgAlt"  />
            <span>{{ item.location }}</span>
            <span>{{ item.date }}</span>
          </li>
        </ol>            
      </div>
    </main>
  </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
  name: 'Navbar',
  data() {
    return {
      selectedMenu: 'Home',
      breadcrumbs: [
        { label: 'Home', to: '/' },
        { label: 'Galeri', to: '/gallery' }
      ],
      galleryItems: [
        { imgSrc: '/images/foto2.jpg', imgAlt: '1', location: 'Huta Holbung', date: '10-Juni-2024', onClick: this.navigateToHolbung },
        { imgSrc: '/images/foto3.jpg', imgAlt: 'deafheaven album cover', location: 'Jakarta', date: '10-Juni-2024' },
        { imgSrc: '/images/foto6.jpg', imgAlt: 'deafheaven album cover', location: 'PekanBaru', date: '10-Juni-2024' },
        { imgSrc: '/images/foto7.jpg', imgAlt: 'deafheaven album cover', location: 'Jepang', date: '10-Juni-2024' },
        { imgSrc: '/images/foto10.jpg', imgAlt: 'deafheaven album cover', location: 'Medan', date: '10-Juni-2024' },
        { imgSrc: '/images/foto12.jpg', imgAlt: 'deafheaven album cover', location: 'Indonesia', date: '10-Juni-2024' }
      ]
    };
  },
  methods: {
    setActiveMenu(menu) {
      this.selectedMenu = menu;
    },
    navigateToHolbung() {
      this.$router.push('/holbung');
      this.setActiveMenu('holbung'); // Set active menu if needed
    }
  },
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
};
</script>

  
<style scoped>
.q-breadcrumbs {
  margin-left: 14%;
    margin-right: 5%;
    cursor: pointer;
    
}

.body-galeri {
  margin: 1%;
  font-size: small;
}

* {
	box-sizing: border-box;
}

img {
	width: 100%;
	display: block;
}

body {
	margin: 0;
	padding: clamp(1rem, 2vw, 3rem);
	font-family: "Open Sans", sans-serif;
}

a {
	color: inherit;
}

.wrapper {
	max-width: 80rem;
	margin: 0 auto;
}

ol {
	list-style: none;
	padding: 1.5rem;
	border: 0.1rem solid lightgrey;
	columns: 20rem;
	column-gap: 4rem;
	column-rule: 0.2rem dotted black;
	border-radius: 0.5rem;
}

li {
  cursor: pointer;
	--y: calc(100% - 2rem);
	display: grid;
	grid-template-columns: minmax(3.75em, auto) 1fr;
	gap: 0 0.5em;
	break-inside: avoid;
  page-break-inside: avoid;
	background: radial-gradient(circle at 30% var(--y), rgb(244, 249, 249), rgb(244, 249, 249));
	color: black;
  font-family:Roboto Mono ;
  font-weight: 800;
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: 0.25rem 0.25rem 0.5rem rgb(0 0 0 / 0.17);
  transition: transform 0.3s ease-in;
  transition: transform 0.3s ease-out;
}

li:hover {
  transform: scale(1.03);
  
}

li + li {
	margin-top: 1rem;
}

li img {
	grid-column: 1 / 3;
	grid-row: 1;
	aspect-ratio: 1.8;
	object-fit: cover;
}

li::before {
	counter-increment: list-item -1;
	content: counter(list-item);
	font-weight: 700;
	font-size: 4.5em;
	letter-spacing: -0.125em;
	line-height: 1;
	color: black;
	grid-column: 1;
	grid-row: span 2;
	align-self: end;
	margin: 0 0 -0.15em -0.15em;
}

li span {
	grid-column: 2;
}

li span:first-of-type {
	font-size: 1.5em;
	padding-top: 1rem;
}

li span:last-of-type {
	font-style: italic;
	padding-bottom: 1rem;
}
</style>
  