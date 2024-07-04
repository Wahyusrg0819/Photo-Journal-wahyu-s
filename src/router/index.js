import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Blog from '../views/Blog.vue'
import Holbung from '../views/holbung.vue'
import pekanbaru from '../views/pekanbaru.vue'
import about from '../views/About.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/holbung',
    name: 'Holbung',
    component: Holbung
  },
  {
    path: '/pekanbaru',
    name: 'Pekanbaru',
    component: pekanbaru
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
