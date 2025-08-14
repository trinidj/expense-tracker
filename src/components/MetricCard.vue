<script setup>
  const props = defineProps({
    name: {
      type: String
    },
    icon: {
      type: Function
    },
    value: {
      type: Number
    }
  })
</script>

<template>
  <section class="bg-red-300 flex flex-col col-span-1 row-span-1 rounded-xl Items-center justify-between">
    <header>
      <h2>{{ name }}</h2>
      <component :is="icon" :size="25" />
    </header>

    <div>
      <p>{{ value }}</p>
    </div>
  </section> 
</template>