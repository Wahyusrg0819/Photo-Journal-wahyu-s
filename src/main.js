import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css'
import router from './router'
import { Quasar } from 'quasar'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'



createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app')

  

