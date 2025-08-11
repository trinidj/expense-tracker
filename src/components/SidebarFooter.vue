<script setup>
  import SidebarItem from '@/components/ui/SidebarItem.vue';

  const props = defineProps({
    accountItems: {
      type: Array
    },
    isExtended: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
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
</template>