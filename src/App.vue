<template>
  <q-layout>
    <q-page-container>
        <Navbar />
       
        <router-view />
     
      </q-page-container>
    </q-layout>

</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
  
}
</script>

<style scoped>

</style>
