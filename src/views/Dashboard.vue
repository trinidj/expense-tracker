<script setup>
  import { BanknoteArrowUp, BanknoteArrowDown } from 'lucide-vue-next';
  import Chart from 'primevue/chart';
  import { ref, onMounted } from "vue";
  import { getAllMonths } from '@/utils/getAllMonths';
  

  onMounted(() => {
      chartData.value = setChartData();
      chartOptions.value = setChartOptions();
  });

  const chartData = ref();
  const chartOptions = ref();

  const setChartData = () => {
    return {
      labels: getAllMonths(),
      datasets: [
        {
          label: 'Total',
          data: [2000, 2800, 2300, 4600, 4000, 4500, 2500, 1000, 5800, 2200, 2400, 3500],
          backgroundColor: '#a78bfa',
          borderColor: '#a78bfa',
          borderWidth: 0,
          borderRadius: 10,
          borderSkipped: false,
        }
      ]
    };
  };

  const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
</script>

<template>
  <section class="flex-1 overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] p-4 md:p-10 gap-9">
      <div class="flex items-center col-span-1 md:col-span-2 py-4 rounded-lg">
        <p class="text-xl md:text-3xl font-medium">Dashboard</p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 text-gray-800 col-span-1 md:col-span-2 rounded-lg">
        <div class="flex flex-col gap-2 bg-white rounded-lg">
          <div class="p-5 pb-0">
            <h1 class="flex items-center justify-between gap-2 text-lg">
              Income
              <BanknoteArrowUp :size="20" />
            </h1>
          </div>

          <div class="p-5 pt-0">
            <h2 class="text-3xl">$500.00</h2>
          </div>
        </div>

        <div class="flex flex-col gap-2 bg-white rounded-lg">
          <div class="p-5 pb-0">
            <h1 class="flex items-center justify-between gap-2 text-lg">
              Expenses
              <BanknoteArrowDown :size="20" />
            </h1> 
          </div>

          <div class="p-5 pt-0">
            <h2 class="text-3xl">$500.00</h2>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg border-2 border-gray-200/30">
        <h2 class="text-xl">
          Monthly Expenses
        </h2>
        <Chart 
          type="bar" 
          :data="chartData" 
          :options="chartOptions" 
        />
      </div>
      <div class="bg-red-300 p-4 rounded-lg">4</div>
    </div>
  </section>
</template>