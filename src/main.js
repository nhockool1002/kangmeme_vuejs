import './plugins'
import './assets/style.css'
import Vue from 'vue'
import App from './App.vue'

import router from './routers'
import store from './store/index'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
