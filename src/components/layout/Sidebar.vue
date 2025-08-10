<script setup>
  import { ref } from 'vue';
  import SidebarItem from '@/components/ui/SidebarItem.vue';
  import { ArrowLeftToLine, LayoutDashboard, CreditCard, ChartArea, User, Settings, Banknote, Wallet } from 'lucide-vue-next';

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: CreditCard },
    { name: 'Budgets', path: '/budgets', icon: Banknote },
    { name: 'Reports', path: '/analytics', icon: ChartArea },
    { name: 'Wallets', path: '/wallets', icon: Wallet }
  ]

  const accountItems = [
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ]

  const sidebarOpen = ref(true);

  const toggleSidebar = () => {
    console.log('Click!');
    sidebarOpen.value = !sidebarOpen.value;
  }

</script>

<template>
  <aside class="h-screen">
    <nav 
      :class="[
        'h-full flex flex-col justify-between bg-white border-r-1 border-r-purple-400 shadow-2xl transition-all', 
        sidebarOpen ? 'w-60' : 'w-15 items-center'
      ]"
    >
      <div class="flex flex-row p-5 items-center justify-between">
        <div :class="['overflow-hidden transition-all whitespace-nowrap', sidebarOpen ? 'w-40' : 'w-0']">
          <h1 class="font-medium">Expense Tracker</h1>
          <p class="text-xs">Keep Track of your Expenses</p>
        </div>
        <button 
          @click="toggleSidebar" 
          class="flex items-center justify-center p-2 rounded transition duration-300 ease hover:cursor-pointer hover:bg-gray-500/20"
        >
          <ArrowLeftToLine
            :size="16"
            :class="['transition-transform duration-100', sidebarOpen ? '' : 'rotate-180']"
          />
        </button>
      </div>

      <div :class="['transition-all overflow-hidden', sidebarOpen ? 'w-50' : 'item-center w-10']">
        <ul :class="['flex flex-col gap-5 p-5 ']">
          <SidebarItem 
            v-for="item in navItems"
            :key="item.path"
            :name="item.name"
            :path="item.path"
            :icon="item.icon"
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
          />
        </ul>
      </div>
    </nav>
  </aside>
</template>