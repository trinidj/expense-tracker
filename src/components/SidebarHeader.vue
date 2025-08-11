<script setup>
  import { ArrowLeftToLine } from 'lucide-vue-next';
  
  const props = defineProps({
    isExtended: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['toggle-sidebar'])

</script>

<template>
  <div class="flex flex-row p-5 items-center justify-between">
    <div :class="['overflow-hidden transition-all whitespace-nowrap', props.isExtended ? 'w-40' : 'w-0']">
      <h1 class="font-medium">Expense Tracker</h1>
      <p class="text-xs">Keep Track of your Expenses</p>
    </div>
    <button 
      @click="emit('toggle-sidebar')" 
      class="flex items-center justify-center p-2 rounded transition duration-300 ease hover:cursor-pointer hover:bg-gray-500/20"
    >
      <ArrowLeftToLine
        :size="16"
        :class="['transition-transform duration-100', props.isExtended ? '' : 'rotate-180']"
      />
    </button>
  </div>
</template>

