import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CallbackView from '../views/CallbackView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ErrorView from '@/views/ErrorView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
    {
      path: '/results/:SelectionID',
      name: 'results',
      props: true,
      component: ResultsView
    },
  ]
})

export default router
