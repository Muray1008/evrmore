import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/MineView.vue')
    },
    {
      path: '/get_evr',
      name: 'get_evr',
      component: () => import('@/views/GetEvrView.vue')
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/MarketingView.vue')
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: () => import('@/views/InitiativesView.vue')
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
