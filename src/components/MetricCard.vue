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
      type: Number
    }
  })
</script>

<template>
  <section class="bg-white/45 flex flex-col col-span-1 row-span-1 rounded-xl Items-center justify-between">
    <header class="p-6 pb-0 flex flex-row item-center justify-between">
      <h2 class="text-balance font-medium">{{ name }}</h2>
      <component :is="icon" :size="25" :color="iconColor" />
    </header>

    <div class="p-6 pt-0">
      <p class="text-3xl">{{ value }}</p>
    </div>
  </section> 
</template>