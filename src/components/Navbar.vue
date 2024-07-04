<template>
    <div class="header">
    <header class="header-nav">
      <div class="icon-judul">
  <h1>風メモリーズ</h1>
  <div class="social-icons">
    <a href="https://www.instagram.com/wahyu_shiregaru/" target="_blank">
      <i class="fab fa-instagram" id="instagram"></i>
    </a>
    <a href="#">
      <i class="fab fa-facebook" id="facebook"></i>
    </a>
    <a href="#">
      <i class="fab fa-reddit" id="reddit"></i>
    </a>
  </div>
</div>
      <p>By Wahyu Siregar</p>
      
     <nav class="navigasi">
      
      <div class="nav-two">
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
      <router-link
        to="/about"
        class="nav-link"
        :class="{ 'active': selectedMenu === 'About' }"
        @click.native="setActiveMenu('About')"
        >
        <button>
          AboutMe
        </button>
      </router-link>

    </div>
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

.icon-instagram {
      display: inline-block;
      color: #000;
      text-decoration: none;

    }
    
    /* Unique hover effect */
    .gap-icon i {
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      transform: rotate(0deg);
    }
    
    /* Instagram icon */
    #instagram:hover {
      background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; /* Instagram color */
      transform: rotate(360deg);

    }
    
    /* Facebook icon */
    #facebook:hover {
      color: #3b5998; /* Facebook color */
      transform: rotate(360deg);
    }
    
    /* Reddit icon */
    #reddit:hover {
      color: #ff5700; /* Reddit color */
      transform: rotate(360deg);
    }

i{
  font-size: 40px;
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
  
}


.icon-judul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  padding-bottom: 1%;
  margin-bottom: 2%;
  margin-top: -0.5%;
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
    font-weight: 800;
    margin-bottom: -5px;
    text-shadow: 6px 3px 3px rgba(0, 0, 0, 0.5);
}

@media (max-width: 460px) {
  .header {
    margin-top: 3%;
  }
  h1 {
    font-size: 270%;
  }
  i{
    font-size: 35px;
  }
  button {
    padding: 10px 15px; 
    border-width: 1px;
    font-size: 5px;
  }

  .icon-judul {
  display: flex;
  flex-direction: column;
  align-items: center; /* Mengatur agar konten berada di tengah */

  }

  .social-icons {
    display: flex;
    justify-content: center; /* Mengatur agar ikon-ikon berada di tengah */
    margin-bottom: 5px; /* Atur margin jika diperlukan */
  }
  
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
    
}

.nav-two {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

button {
  font-family: kanit;
  font-weight: 450;
  display: inline-block;
  background-color: white;
  padding: 9px 20px;  
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
}

button:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

button:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: black;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

button:hover {
  color: white;
}

button:hover:before {
  top: -35%;
  background-color: black;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

button:hover:after {
  top: -45%;
  background-color: black;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}



  </style>
  