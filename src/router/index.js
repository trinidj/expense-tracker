import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Transactions from '@/views/Transactions.vue';
import Reports from '@/views/Reports.vue';
import Budget from '@/views/Budget.vue';
import Wallets from '@/views/Wallets.vue';

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
  {
    path: '/wallets', 
    name: 'Wallets', 
    component: Wallets
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;