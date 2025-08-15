<script setup>
import Chart from 'primevue/chart'

const props = defineProps({
  title: {
    type: String,
    default: 'Monthly Expense'
  },
  type: {
    type: String,
    default: 'bar'
  },
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <section class="bg-white/45 col-span-3 row-span-3 row-start-2 rounded-xl flex flex-col dark:bg-gray-800/40 dark:border dark:border-gray-800
  ">
    <header class="p-6">
      <h2 class="text-balance font-medium dark:text-white">{{ title }}</h2>
    </header>
    <div class="flex-1 min-h-0 p-6 pt-0">
      <Chart 
        :type="type"
        :data="data"
        :options="options"
        class="w-full h-full"
      />
    </div>
  </section>
</template>