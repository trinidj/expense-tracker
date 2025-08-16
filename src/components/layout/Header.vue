<script setup>
  import { Sun, Moon } from "lucide-vue-next";
  import ToggleSwitch from "primevue/toggleswitch";
  import { useDarkMode } from "@/composables/useDarkMode";

  const props = defineProps({
    title: {
      type: String
    }
  });

  const { toggleDarkMode } = useDarkMode();
</script>

<template>
  <header class="flex flex-row p-5 justify-between items-center">
    <div class="flex flex-col">
      <h1 class="text-3xl font-medium dark:text-white">{{ title }}</h1>
      <p class="text-sm text-gray-400">Track your expenses and manage your finances</p>
    </div>

    <div class="flex flex-row items-center gap-4 h-fit">
      <div class="flex flex-row items-center gap-3">
        <Sun 
          :size="20"
          class="dark:text-white"
        />
        <ToggleSwitch 
          @change="toggleDarkMode"
        />
        <Moon 
          :size="20"
          class="dark:text-white"
        />
      </div>
    </div>
  </header>
</template>