<script setup>
  const props = defineProps({
    rows: {
      type: Number
    },
    cols: {
      type: Number
    }
  });
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-4 gap-4 h-full">
    <slot />
  </div>
</template>