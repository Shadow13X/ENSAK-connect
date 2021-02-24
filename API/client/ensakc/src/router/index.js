import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home        from '../views/Home.vue'
import LandingPage from '@/views/LandingPage'
// import Calendar from '@/components/student/Calendar'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ladingPage',
    component: LandingPage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // //===================== Authentication Routes =======================
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "Login" */ '../views/LoginPage.vue')
  // },
  {
    path: '/student',
    redirect: {name:"Event"},
    component: () => import('@/views/student/StudentPage'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/resume',
        name: 'Resume',
        component: () => import('@/views/student/ResumePage'),
        children:[

        ]
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/enterprises',
        name: 'Enterprises',
        component: () => import('@/views/student/EnterprisesPage')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/enterprises/:id',
        name: 'Enterprises',
        component: () => import('@/views/student/EnterprisePage')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/projects',
        name: 'Projects',
        component: () => import('@/views/student/ProjectsPage')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/projects/:id',
        name: 'Projects',
        component: () => import('@/views/student/ProjectPage')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/student/calendar',
        name: 'Calendar',
        component: () => import('@/components/student/Calendar'),
        props: {
          Dates: {
            startDate: '2021-04-08T18:00:00Z',
            endDate: '2021-04-09T09:00:00Z'
          }
        }
      },
      {
        path: '/student/event',
        name: 'Event',
        component: () => import('@/views/student/EventPage')
      }
    ]
  }
]

// Needs Server Config in production
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes //short for routes : routes
})

export default router
