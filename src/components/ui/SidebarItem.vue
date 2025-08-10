<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    name: { type: String },
    path: { type: String },
    icon: { type: [Object, Function], default: null },
  })
</script>

<template>
  <li class="p-2 hover:bg-gray-200 rounded-md transition-colors">
    <RouterLink
      :to="props.path"
      class="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium"
      active-class="text-purple-600"
    >
      <component :is="props.icon" />
      <p class="text-md">{{ props.name }}</p>
    </RouterLink>
  </li>
</template>