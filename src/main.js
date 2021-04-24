import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'
import VueSession from 'vue-session'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://localhost:8000/api'
Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})
Vue.use(VueSession)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
