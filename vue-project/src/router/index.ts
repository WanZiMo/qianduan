import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',name: 'Manager',component: () => import('../views/Manager.vue'),children:[
        {path: 'data',name: 'data',meta:{title:"数据展示页面"},component: () => import('../views/Data.vue')},
      ]
      
    },
  ],
})

export default router
