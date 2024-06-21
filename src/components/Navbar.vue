<template>
    <div class="header">
    <header class="header-nav">
      <h1>風メモリーズ</h1>
      <p>By Wahyu Siregar</p>
     <nav class="navigasi">
      <router-link
        to="/"
        class="nav-link"
        :class="{ 'active': selectedMenu === 'Home' }"
        @click.native="setActiveMenu('Home')"
      >
        <button>
          Home
        </button>
      </router-link>
      <router-link
        to="/gallery"
        class="nav-link"
        :class="{ 'active': selectedMenu === 'Galeri' }"
        @click.native="setActiveMenu('Galeri')"
      >
        <button>
          Gallery
        </button>
      </router-link>
      <router-link
        to="/blog"
        class="nav-link"
        :class="{ 'active': selectedMenu === 'Artikel' }"
        @click.native="setActiveMenu('Artikel')"
      >
        <button>
          Article
        </button>
      </router-link>
    </nav>
    </header>
    </div>

  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        selectedMenu: 'Home'
      }
    },
    methods: {
      setActiveMenu(menu) {
        this.selectedMenu = menu;
      }
    }
  }
  </script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.header {
  padding-bottom: 1%;
  margin-bottom: 2%;
  position: relative; /* Untuk posisi relatif agar bisa menambahkan efek */
}

.header::before {
    content: ''; /* Menambahkan elemen pseudo sebelum header */
    position: absolute;
    bottom: 0; /* Membuatnya di bagian bawah header */
    left: 50%; /* Pusatkan di tengah header */
    width: 0;
    height: 2px;
    background-color: #000000; /* Warna garis bawah */
    transition: width 0.3s ease; /* Animasi lebar garis bawah */
    transform: translateX(-50%); /* Pusatkan garis bawah */
}

.header:hover::before {
    width: 100%; /* Lebarkan garis bawah saat hover */
}


h1 {
    font-family: kanit;
    font-size: 300%;
    font-weight:800;
    
}

p {
  font-family: kanit;
  font-size: 150%;
  font-weight: 500;
}

.header-nav {
    margin: 1%;
    margin-right: 5%;
    margin-left: 5%;
    
}

.navigasi {
    font-family: kanit;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    width: 100%;
}

button {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0.5em;
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #ffffff;
  transition: all 0.3s;
  box-shadow: 6px 6px 17px hsl(0, 0%, 90%), -6px -6px 17px #ffffff;
}

button:hover {
  border: 1px solid white;
}

button:active {
  box-shadow: 4px 4px 17px #c5c5c5, -4px -4px 17px #ffffff;
}


  </style>
  