<script setup>
  import SidebarItem from '@/components/ui/SidebarItem.vue';

  const props = defineProps({
    navItems: {
      type: Array
    },
    isExtended: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
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
</template>