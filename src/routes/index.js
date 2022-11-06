import Vue from 'vue'
import VueRouter from 'vue-router'
import firstView from '../views/LoginView.vue'
import joinView from '../views/JoinView.vue'
import loginView from '../views/LoginView.vue'
import mainView from '../views/MainView.vue'
import menudetailView from '../views/MenuDetailView.vue'
import mainexView from '../views/MainExView.vue'

Vue.use(VueRouter)

export const routes = [
    {
      path: '/',
      name: 'first',
      component: firstView
    },
    {
      path: '/join',
      name: 'join',
      component: joinView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/main',
      name: 'main',
      component: mainView
    },
    {
      path: '/menudetail',
      name: 'menudetail',
      component: menudetailView
    },
    {
      path: '/mainex',
      name: 'mainex',
      component: mainexView
    }
    
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})