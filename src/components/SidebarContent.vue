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
  <div class="flex flex-1 p-2 w-full">
    <ul class="flex flex-col gap-3 w-full">
      <SidebarItem 
        v-for="item in navItems"
        :key="item.path"
        :path="item.path"
        :name="item.name"
        :icon="item.icon"
        :sidebar-open="isExtended"
      />
    </ul>
  </div>
</template>