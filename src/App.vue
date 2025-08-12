<script setup>
  import Main from '@/components/layout/Main.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import { ref } from 'vue';

  const isExtended = ref(true);

</script>

<template>
  <Main>
    <Sidebar 
      :isExtended="isExtended"
      @mouseenter="isExtended = true"
      @mouseleave="isExtended = false"
    />
    <RouterView id="page"/>
  </Main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  * {
    font-family: 'Ubuntu', sans-serif;
  }

  #page {
    background: linear-gradient(
      to bottom,
      #fbf1ff,  
      #f8e7ff,
      #f5deff,
      #f2d3ff   
    );
  }
</style>