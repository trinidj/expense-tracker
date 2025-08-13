<script setup>
  import { DollarSign, BanknoteArrowDown, BanknoteArrowUp } from 'lucide-vue-next';
  import { getAllMonths } from '@/utils/getAllMonths.js';
  import { ref, onMounted } from "vue";

  import Chart from 'primevue/chart';

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
          data: [1200, 1900, 3000, 500, 2000, 3000, 1500, 2400, 1800, 2200, 2600, 3200],
          backgroundColor: '#a855f7',
          borderColor: '#a855f7',
          borderRadius: 5,
          borderWidth: 1
        }
      ]
    };
  };

  const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color') || '#374151';
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color') || '#6B7280';
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || '#E5E7EB';

    return {
      responsive: true,           
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
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
  <div class="flex flex-col h-screen flex-1">
    <header class="flex flex-row items-center p-10">
      <div>
        <h1 class="text-3xl">Dashboard</h1>
      </div>
    </header>
    
    <section class="flex-1">
      <div class="grid grid-cols-4 grid-rows-4 gap-4 p-10 pt-0 h-full">
        <div class="bg-white/45 flex flex-col rounded-xl h-fit">
          <div class="flex items-center justify-between p-6">
            <h2 class="text-sm">Current Balance</h2>
            <DollarSign :size="20" />
          </div>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </div> 

        <div class="bg-white/45 flex flex-col rounded-xl h-fit">
          <div class="flex items-center justify-between p-6">
            <h2 class="text-sm">Income</h2>
            <BanknoteArrowDown :size="20" />
          </div>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </div>

        <div class="bg-white/45 flex flex-col rounded-xl h-fit">
          <div class="flex items-center justify-between p-6">
            <h2 class="text-sm">Expenses</h2>
            <BanknoteArrowUp :size="20" />
          </div>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </div>

        <div class="bg-white/50 col-span-3 row-span-3 row-start-2 rounded-xl flex flex-col">
          <div class="p-6 pb-2">
            <h2 class="text-xl">Monthly Spending</h2>
          </div>

          <div class="flex-1 p-6 pt-2 min-h-0">
            <Chart 
              type="bar"
              :data="chartData"
              :options="chartOptions"
              style="height: 100%; width: 100%;"
            />
          </div>
        </div>

        <div class="bg-white/50 row-span-3 col-start-4 row-start-2 rounded-xl flex flex-col">
          <div class="p-6 pb-2">
            <h2 class="text-xl">Recent Transactions</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>