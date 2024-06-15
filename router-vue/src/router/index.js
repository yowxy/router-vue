import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/home',
      redirect:'/',
    },

    {
      path: "/products/:id",
      name: "products",
      component: () => import('../views/Products.vue'),
      children :[
        {
          path: 'owner',
          name: 'owner',
          component : () => import ('../views/Owner.vue')
        }
      ]
    },
    
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/:catchall(.*)*',
      name:"404",
      component: () => import ('../views/error/404.vue'),
    },
  ],
});

export default router;
