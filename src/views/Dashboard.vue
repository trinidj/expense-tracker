<script setup>
  import { ref, onMounted } from "vue";
  import { getAllMonths } from '@/utils/getAllMonths';
  import { BanknoteArrowDown, BanknoteArrowUp, CircleDollarSign } from "lucide-vue-next";

  import { Sun, Moon } from "lucide-vue-next";
  import Chart from 'primevue/chart';
  import DashboardGrid from '@/components/layout/dashboard/DashboardGrid.vue'
  import { Button, Dialog, InputText, AutoComplete, Textarea, ToggleSwitch } from "primevue";
  import { Form } from "@primevue/forms";
  import MetricCard from "@/components/MetricCard.vue";
  import ChartCard from "@/components/ChartCard.vue";
  import TransactionsCard from "@/components/TransactionsCard.vue";

  const barData = ref({});
  const barOptions = ref({});

  const isVisible = ref(false);

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
  <div 
    class="flex flex-col h-screen flex-1 
         bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 
         dark:from-gray-900 dark:via-gray-800 dark:to-purple-800
  ">
    <header class="flex flex-row p-5 justify-between items-center">
      <div class="flex flex-col">
        <h1 class="text-3xl font-medium dark:text-white">Dashboard</h1>
        <p class="text-sm text-gray-400">Track your expenses and manage your finances</p>
      </div>

      <div class="flex flex-row items-center gap-4 h-fit">
        <div class="flex flex-row items-center gap-3">
          <Sun 
            class="dark:text-white"
          />
          <ToggleSwitch 
            
          />
          <Moon 
            class="dark:text-white"
          />
        </div>

        <Button type="button" label="Add Transaction" severity="help" @click="isVisible = true" />
      </div>
    </header>
    <section class="flex-1 p-5 pt-0"> 
      <DashboardGrid>
        <Dialog 
          v-model:visible="isVisible" 
          modal
          header="Add Transaction" 
          :pt="{
            root: 'w-xl'
          }"
        >
          <Form>
            <div class="flex flex-col gap-8">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col gap-2">
                  <label for="amount">Amount</label>
                  <InputText placeholder="0.00" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="category">Category</label>
                  <AutoComplete dropdown />
                </div>
              </div> 

              <div class="flex flex-col gap-2">
                <label for="description">Description</label>
                <Textarea 
                  style="resize: none"
                />
              </div>

              <div class="flex flex-row justify-end gap-4">
                <Button type="button" label="Cancel" severity="secondary" @click="isVisible = false"/>
                <Button type="submit" label="Add" severity="help" @click="isVisible = false"/>
              </div>
            </div>
          </Form>
        </Dialog>

        <!-- Metrics -->
        <MetricCard 
          :name="'Income'" 
          :icon="BanknoteArrowDown"
          :iconColor="'green'"
          :value="'$500.00'"
        />   

        <MetricCard 
          :name="'Expense'" 
          :icon="BanknoteArrowUp"
          :iconColor="'red'"
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