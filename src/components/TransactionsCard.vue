<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-white/45 col-start-4 col-span-1 row-span-4 rounded-xl border border-emerald-300/40 dark:bg-gray-800/40 dark:border dark:border-gray-800">
    <header class="p-6 flex flex-row justify-between item-center">
      <h2 class="text-balance font-medium dark:text-white">Recent Transactions</h2>

      <RouterLink
        :to="'/transactions'"
        class="hover:underline dark:text-white"
      >
        <p class="dark:text-white">View All</p>
      </RouterLink>
    </header>

    <div>

    </div>
  </section>
</template>