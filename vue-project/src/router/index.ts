import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',name: 'Manager',component: () => import('../views/Manager.vue'),
    },
  ],
})

export default router
