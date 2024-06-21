import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'baguettebox.js/dist/baguettebox.min.css';
import baguetteBox from 'baguettebox.js';
import './style.css'
import router from './router'
import App from './App.vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'



createApp(App)
  .use(router)
  .use(Quasar)
  .use(baguetteBox)
  .mount('#app')

  

