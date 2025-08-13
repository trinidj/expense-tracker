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
    <section class="flex-1 p-10"> 
      <DashboardGrid>
        <section class="bg-white/45 flex flex-col rounded-xl justify-between h-fit">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Current Balance</h2>
            <DollarSign :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section> 

        <section class="bg-white/45 flex flex-col rounded-xl justify-between h-fit">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Income</h2>
            <BanknoteArrowDown :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section>

        <section class="bg-white/45 flex flex-col rounded-xl justify-between h-fit">
          <header class="flex items-center justify-between p-6">
            <h2 class="text-sm">Expenses</h2>
            <BanknoteArrowUp :size="20" />
          </header>
          <div class="p-6 pt-0">
            <p class="text-3xl font-medium">$500.00</p>
          </div>
        </section>

        <section class="bg-white/50 col-span-3 row-span-3 row-start-2 rounded-xl flex flex-col">
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

        <section class="bg-white/50 row-span-2 col-span-1 row-start-1 rounded-xl flex flex-col">
          <header class="p-6">
            <h1 class="text-xl">Expense Statistics</h1>
          </header>  

          <div class="flex items-center justify-center bg-red-300 h-full p-6 pt-0">
            
          </div>
        </section>

        <section class="bg-white/50 row-span-2 col-span-1 row-start-3 rounded-xl flex flex-col">
          <header class="flex flex-row items-center justify-between p-6">
            <h2 class="text-xl">Recent Transactions</h2>
            <RouterLink
              :to="'/transactions'"
            >
              View All
            </RouterLink>
          </header>

          <div class="p-6 pt-0 h-full">
            <ul class="flex flex-col h-full">
              <li class="flex flex-row p-2 pl-0 pr-0 items-center justify-between">
                <div class="flex items-center gap-3">
                  <ShoppingBag 
                    class="p-2 bg-red-300 rounded-md"
                    :size="35" 
                  />
                  <p>Item 1</p>
                </div>
                <p>-$20.00</p>
              </li>

              <li class="flex flex-row p-2 pl-0 pr-0 items-center justify-between">
                <div class="flex items-center gap-3">
                  <ShoppingBag 
                    class="p-2 bg-red-300 rounded-md"
                    :size="35" 
                  />
                  <p>Item 1</p>
                </div>
                <p>-$20.00</p>
              </li>
            </ul>
          </div>
        </section>
      </DashboardGrid>
    </section>
  </div>
</template>