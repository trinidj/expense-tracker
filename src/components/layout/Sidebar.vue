<script setup>
  import { ref } from 'vue';
  import SidebarItem from '@/components/ui/SidebarItem.vue';
  import SidebarHeader from '@/components/SidebarHeader.vue';
  import { LayoutDashboard, CreditCard, ChartArea, User, Settings, Banknote, Wallet } from 'lucide-vue-next';

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

      <div class="transition-all overflow-hidden">
        <ul class="flex flex-col gap-5 p-5 transition-all overflow-hidden">
          <SidebarItem 
            v-for="item in navItems"
            :key="item.path"
            :name="item.name"
            :path="item.path"
            :icon="item.icon"
            :sidebar-open="isExtended"
          />
        </ul>
      </div>

      <div class="flex flex-col mt-auto">
        <ul class="flex flex-col gap-2 p-5">
          <SidebarItem 
            v-for="item in accountItems"
            :key="item.path"
            :name="item.name"
            :path="item.path"
            :icon="item.icon"
            :size="item.size"
            :sidebar-open="isExtended"
          />
        </ul>
      </div>
    </nav>
  </aside>
</template>