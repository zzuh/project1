import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {router} from './routes/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
