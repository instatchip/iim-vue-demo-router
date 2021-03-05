import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Who from '../components/Who.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  el: '#app',
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/qui-sommes-nous',
          component: Who
        }
      ]
    },
    {
      path: '/home',
      redirect: ''
    },
    {
      path: '/a-propos',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

export default router
