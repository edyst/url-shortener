import Router from 'vue-router'
import Vue from 'vue'
import Dashboard from '@/components/Dashboard.vue'
import Register from '@/components/Register.vue'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Register',
      component: Register
    }
  ]
})