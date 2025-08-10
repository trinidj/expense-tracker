<script setup>
  import SidebarItem from '@/components/ui/SidebarItem.vue';
  import { ArrowLeftToLine, LayoutDashboard, CreditCard } from 'lucide-vue-next';

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: CreditCard },
  ]
</script>

<template>
  <aside class="h-screen">
    <nav class="h-full flex flex-col bg-white w-70 border-r-1 shadow-2xl border-x-purple-400">
      <div class="flex flex-row items-center justify-between p-6">
        <div class="flex flex-col gap-1">
          <h1 class="font-medium">Expense Tracker</h1>
          <p class="text-xs">Keep Track of your Expenses</p>
        </div>
        <button class="p-2 rounded transition duration-300 ease hover:cursor-pointer hover:bg-gray-500/20 hover:">
          <ArrowLeftToLine
            :size="16"
          />
        </button>
      </div>

      <ul class="flex flex-col gap-2 px-4 py-8">
        <SidebarItem 
          v-for="item in navItems"
          :name="item.name"
          :path="item.path"
          :icon="item.icon"
        />
      </ul>
    </nav>
  </aside>
</template>