import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Transactions from '@/views/Transactions.vue';
import Reports from '@/views/Reports.vue';
import Budget from '@/views/Budget.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/analytics',
    name: 'Reports & Analytics',
    component: Reports
  },
  {
    path: '/budgets',
    name: 'Budgets',
    component: Budget
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;