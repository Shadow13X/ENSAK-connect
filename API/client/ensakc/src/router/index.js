import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home        from '../views/Home.vue'
import LandingPage from "@/views/LandingPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ladingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //===================== Authentication Routes =======================
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
]

// Needs Server Config in production
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes //short for routes : routes
})

export default router
