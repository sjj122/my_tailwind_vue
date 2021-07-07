import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ring-button'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/ring-button',
    name: 'Ring-Button',
    component: () => import("../views/Ring-Button.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
