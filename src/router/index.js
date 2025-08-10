import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Transactions from '@/views/Transactions.vue';

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;