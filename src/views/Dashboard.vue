<script setup>
  import { BanknoteArrowUp, BanknoteArrowDown } from 'lucide-vue-next';
</script>

<template>
  <section class="flex-1">
    <div class="p-10">
      <div class="flex flex-row gap-20 p-5 text-gray-800">
        <div class="flex flex-col gap-2">
          <h1 class="flex items-center gap-2 text-lg">
            <BanknoteArrowUp 
              :size="16"
            />
            Income
          </h1>
          <h2 class="text-5xl">$500.00</h2>
        </div>

        <div class="flex flex-col gap-2">
          <h1 class="flex items-center gap-2 text-lg">
            <BanknoteArrowDown 
              :size="16"
            />
            Expenses
          </h1>
          <h2 class="text-5xl">$500.00</h2>
        </div>
      </div>
    </div>
  </section>
</template>