import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/newpage',
      name: '新增頁面',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          component: () => import('../views/ComponentA.vue')
        },
        {
          path: 'b',
          component: () => import('../views/ComponentB.vue')
        },
        {
          path: 'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'C2A',
              components: {
                left: () => import('../views/ComponentC.vue'),
                right: () => import('../views/ComponentA.vue')
              }
            },
            {
              path: 'B2C',
              components: {
                left: () => import('../views/ComponentB.vue'),
                right: () => import('../views/ComponentC.vue')
              }
            }
          ]
        }
      ]
    },
    {
      path: '/apple',
      component: () => import('../views/AppleView.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
