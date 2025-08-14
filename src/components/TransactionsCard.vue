<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-white/45 col-start-4 col-span-1 row-span-4 rounded-xl">
    <header class="p-6 flex flex-row justify-between item-center">
      <h2 class="text-balance font-medium">Recent Transactions</h2>

      <RouterLink
        :to="'/transactions'"
        class="hover:underline"
      >
        <p>View All</p>
      </RouterLink>
    </header>

    <div>

    </div>
  </section>
</template>