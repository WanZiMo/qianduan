import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',redirect:'test'},
    {
      path: '/manager',name: 'Manager',component: () => import('../views/Manager.vue'),children:[
        {path: 'data',name: 'data',meta:{title:"数据展示页面"},component: () => import('../views/Data.vue')},
        {path: 'home',name: 'home',meta:{title:"测试页面"},component: () => import('../views/Home.vue')},
        {path: 'person',name: 'person',meta:{title:"个人信息页面"},component: () => import('../views/Test.vue')},
        {path: 'employee',name: 'employee',meta:{title:"员工信息页面"},component: () => import('../views/Employee.vue')}
      ]
      
    },
    
  ],
})

export default router
