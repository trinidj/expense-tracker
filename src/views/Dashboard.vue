<script setup>
  import { DollarSign, BanknoteArrowDown, BanknoteArrowUp, ShoppingBag } from 'lucide-vue-next';
  import { ref, onMounted } from "vue";
  import { RouterLink } from 'vue-router';     
  import { getAllMonths } from '@/utils/getAllMonths';

  import Chart from 'primevue/chart';
  import DashboardGrid from '@/components/layout/dashboard/DashboardGrid.vue'

  const barData = ref();
  const barOptions = ref();

  onMounted(() => {
    barData.value = setBarData();
    barOptions.value = setBarOptions();
  });

  const setBarData = () => {
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

  const setBarOptions = () => {
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
  };
</script>

<template>
  <div class="flex flex-col h-screen flex-1">
    <header class="flex flex-col p-5">
      <h1 class="text-2xl">Dashboard</h1>
      <p>Track your expenses and manage your finances</p>
    </header>
    <section class="flex-1 p-5 pt-0"> 
      <DashboardGrid>
        <!-- Metrics -->
        <section class="bg-white/45 flex flex-col col-span-1 rounded-xl justify-between">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Current Balance</h2>
            <DollarSign :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section> 

        <section class="bg-white/45 flex flex-col col-span-1 rounded-xl justify-between">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Income</h2>
            <BanknoteArrowDown :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section>

        <section class="bg-white/45 flex flex-col col-span-1 rounded-xl justify-between">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Expenses</h2>
            <BanknoteArrowUp :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section>


        <section class="bg-white/50 col-span-2 row-span-2 row-start-2 rounded-xl flex flex-col">
          <header class="p-6 pb-0">
            <h2 class="text-xl">Monthly Spending</h2>
          </header>

          <div class="flex p-6 pt-0 h-full">
            <Chart 
              type="bar"
              :data="barData"
              :options="barOptions"
              style="width: 100%;"
            />
          </div>
        </section>             
      </DashboardGrid>
    </section>
  </div>
</template>