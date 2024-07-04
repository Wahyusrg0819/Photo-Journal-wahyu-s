<template>
    <q-breadcrumbs gutter="xs">
        <q-breadcrumbs-el 
          to="/"
          label="Home" 
          :class="{ 'active': 
          selectedMenu === 'Home' }"
          @click.native="setActiveMenu('Home')" 
          />
          <q-breadcrumbs-el 
            to="/blog"
            label="Artikel"
            class="nav-link"
            :class="{ 'active': selectedMenu === 'Artikel' }"
            @click.native="setActiveMenu('Artikel')"
        />
      </q-breadcrumbs>

    <div class="body-artikel">
   <h4>COMINGSOON 😁</h4>
    </div>
</template>
  
<script>
import { ref } from 'vue'


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
    },
    setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
      }
    },
  };    
</script>
  
<style scoped>
    .q-breadcrumbs {
    margin-left: 14%;
    margin-right: 5%;
    cursor: pointer;
}

.body-artikel {
  margin: 1%;
  font-size: small;
  text-align: center;
}
</style>
  