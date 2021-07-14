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
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('@/views/Grid.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('@/views/Flex.vue')
  },
  {
    path: '/interactive',
    name: 'Interactive',
    component: () => import('@/views/Interactive.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
