import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Expenses from '../views/Expenses.vue'
import Invoices from '../views/Invoices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/expenses',
          name: 'expenses',
          component: Expenses
        },
        {
          path: '/invoices',
          name: 'invoices',
          component: Invoices
        }
      ]
    },
  ]
})

export default router
