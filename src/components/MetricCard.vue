<script setup>
  const props = defineProps({
    name: {
      type: String
    },
    icon: {
      type: Function
    },
    iconColor: {
      type: String
    },
    value: {
      type: String
    }
  })
</script>

<template>
  <section 
    class="bg-white/45 flex flex-col col-span-1 row-span-1 rounded-xl Items-center justify-between border border-emerald-300/45 dark:bg-gray-800/40 dark:border dark:border-gray-800">
    <header class="p-6 pb-0 flex flex-row item-center justify-between">
      <h2 class="text-lg font-medium dark:text-white">{{ name }}</h2>
      <component :is="icon" :size="25" :color="iconColor" />
    </header>

    <div class="p-6 pt-0">
      <p class="text-3xl dark:text-white">{{ value }}</p>
    </div>
  </section> 
</template>