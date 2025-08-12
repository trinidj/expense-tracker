<script setup>
  import { BanknoteArrowUp, BanknoteArrowDown } from 'lucide-vue-next';
</script>

<template>
  <section class="flex-1">
    <div class="grid grid-cols-[2fr_1fr] grid-rows-5 p-10 gap-4 md:gap-6 lg:gap-6">
      <div class="flex gap-20 p-5 text-gray-800 bg-red-300 col-span-2">
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
      
      <div class="row-span-6 row-start-2 bg-red-300">3</div>
      <div class="row-span-6 row-start-2 bg-red-300">4</div>
    </div>
  </section>
</template>