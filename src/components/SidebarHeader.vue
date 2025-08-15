<script setup>
  const props = defineProps({
    isExtended: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div class="flex flex-row items-center p-4 gap-2">       
    <div :class="['transition-all duration-300 ease overflow-hidden whitespace-nowrap', props.isExtended ? 'w-40' : 'w-0 opacity-0']">
      <h1 class="font-medium dark:text-white">Expense Tracker</h1>
    </div>
  </div>
</template>

