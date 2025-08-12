<script setup>
  import SidebarItem from '@/components/ui/SidebarItem.vue';

  const props = defineProps({
    footerItems: {
      type: Array
    },
    isExtended: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div class="flex p-2">
    <ul class="flex flex-col gap-3">
      <SidebarItem 
        v-for="item in footerItems"
        :key="item.path"
        :path="item.path"
        :name="item.name"
        :icon="item.icon"
        :sidebar-open="isExtended"
      />
    </ul>
  </div>
</template>