<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    name: { type: String },
    path: { type: String },
    icon: { type: [Object, Function], default: null },
    size: { type: Number, default: 20 },
    sidebarOpen: { type: Boolean, default: false },
  })
</script>

<template>
  <li class="hover:bg-gray-200 rounded-md transition-colors">
    <RouterLink
      :to="props.path"  
      class="flex items-center text-gray-700 hover:text-purple-600 font-medium w-full"
      active-class="text-purple-600"                              
    >
      <div class="p-2 flex items-center justify-center w-10 flex-shrink-0">
        <component :is="props.icon" :size="props.size" />
      </div>
      <div 
        :class="['transition-all duration-300 ease overflow-hidden whitespace-nowrap',
        props.sidebarOpen ? 'opacity-100' : 'w-0 opacity-0']"
      >
        <p class="w-max">
          {{ props.name }}        
        </p>
      </div>
    </RouterLink>
  </li>
</template>