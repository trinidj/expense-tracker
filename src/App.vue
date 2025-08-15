<script setup>
  import Main from '@/components/layout/Main.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import { ref } from 'vue';

  const isExtended = ref(false);

</script>

<template>
  <Main>
    <Sidebar 
      :isExtended="isExtended"
      @mouseenter="isExtended = true"
      @mouseleave="isExtended = false"
    />
    <RouterView />
  </Main>
</template>