<script setup>
  import { ref, onMounted } from "vue";
  // import { RouterLink } from 'vue-router';     
  import { getAllMonths } from '@/utils/getAllMonths';
  import { BanknoteArrowDown, BanknoteArrowUp, Circle, CircleDollarSign } from "lucide-vue-next";

  import Chart from 'primevue/chart';
  import DashboardGrid from '@/components/layout/dashboard/DashboardGrid.vue'
  import MetricCard from "@/components/MetricCard.vue";
  import ChartCard from "@/components/ChartCard.vue";
  import TransactionsCard from "@/components/TransactionsCard.vue";

  const barData = ref();
  const barOptions = ref();

  onMounted(() => {
    console.log(typeof Chart);

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
        <MetricCard 
          :name="'Income'" 
          :icon="BanknoteArrowDown"
          :value="'$500.00'"
        />   
        <MetricCard 
          :name="'Expense'" 
          :icon="BanknoteArrowUp"
          :value="'$500.00'"
        />
        <MetricCard 
          :name="'Current Balance'" 
          :icon="CircleDollarSign"
          :value="'$500.00'"
        />


        <!-- Chart -->
        <ChartCard 
          title="Monthly Expenses"
          type="bar"
          :data="barData"
          :options="barOptions"
        />

        <!-- Transactions -->
        <TransactionsCard />
      </DashboardGrid>
    </section>
  </div>
</template>