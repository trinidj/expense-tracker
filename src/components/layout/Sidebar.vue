<script setup>
  import { ref } from 'vue';
  import { LayoutDashboard, CreditCard, ChartArea, User, Settings, Banknote, Wallet } from 'lucide-vue-next';

  import SidebarHeader from '@/components/SidebarHeader.vue';
  import SidebarContent from '@/components/SidebarContent.vue';
  import SidebarFooter from '@/components/SidebarFooter.vue';

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, size: 20 },
    { name: 'Transactions', path: '/transactions', icon: CreditCard, size: 20 },
    { name: 'Budgets', path: '/budgets', icon: Banknote, size: 20 },
    { name: 'Reports', path: '/analytics', icon: ChartArea, size: 20 },
    { name: 'Wallets', path: '/wallets', icon: Wallet, size: 20 }
  ]

  const accountItems = [
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ]

  const isExtended = ref(true);

  const toggleSidebar = () => {
    console.log('Click!');
    isExtended.value = !isExtended.value;
  }
</script>

<template>
  <aside class="h-screen">
    <nav 
      :class="[
        'h-full flex flex-col justify-between bg-white border-r-1 border-r-purple-400 shadow-2xl transition-all duration-300', 
        isExtended? 'w-60' : 'w-16 items-center'
      ]"
    >
      <SidebarHeader 
        :isExtended="isExtended"
        @toggle-sidebar="toggleSidebar"
      />

      <SidebarContent 
        :isExtended="isExtended"
        :navItems="navItems"
      />

      <SidebarFooter 
        :isExtended="isExtended"
        :accountItems="accountItems"
      />
    </nav>
  </aside>
</template>