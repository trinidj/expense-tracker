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
    <nav class="h-full flex flex-col bg-white w-70 border-r-2 shadow-xl border-x-purple-400">
      <div class="flex flex-row justify-between p-6">
        <p>Sidebar</p>
        <button class="bg-gray-500/40 p-1 rounded">
          <ArrowLeftToLine
            :size="16"
          />
        </button>
      </div>

      <ul class="space-y-2 px-4">
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