import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ring-button'
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import("@/views/Card.vue")
  },
  {
    path: '/ring-button',
    name: 'Ring-Button',
    component: () => import("@/views/Ring-Button.vue")
  },
  {
    path: '/transform',
    name: 'Transform',
    component: () => import('@/views/Transform.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
