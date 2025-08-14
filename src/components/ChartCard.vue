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
  <section class="bg-red-300 col-span-3 row-span-3 row-start-2 rounded-xl flex flex-col">
    <h2>{{ title }}</h2>
    <div class="flex-1 min-h-0">
      <Chart 
        :type="type"
        :data="data"
        :options="options"
        class="w-full h-full"
      />
    </div>
  </section>
</template>