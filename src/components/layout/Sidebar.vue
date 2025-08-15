<script setup>
  import { LayoutDashboard, CreditCard, ChartArea, Banknote } from 'lucide-vue-next';

  import SidebarHeader from '@/components/SidebarHeader.vue';
  import SidebarContent from '@/components/SidebarContent.vue';

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, size: 20 },
    { name: 'Transactions', path: '/transactions', icon: CreditCard, size: 20 },
    { name: 'Budgets', path: '/budgets', icon: Banknote, size: 20 },
    { name: 'Reports', path: '/analytics', icon: ChartArea, size: 20 },
  ]

  const props = defineProps({
    isExtended: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <aside class="h-screen">
    <nav :class="[
        'h-full flex flex-col items-center justify-between bg-white border-r-2 border-emerald-300 shadow-2xl transition-all duration-300 dark:bg-gray-800', 
        props.isExtended? 'w-50 items-start' : 'w-14 items-start'  
      ]"
    >
      <SidebarHeader 
        :isExtended="props.isExtended"
      />

      <SidebarContent 
        :isExtended="props.isExtended"
        :navItems="navItems"
      />
    </nav>
  </aside>
</template>