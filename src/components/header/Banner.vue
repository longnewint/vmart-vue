<template>
  <div v-if="isOpen" class="bg-surface-0 dark:bg-surface-950">
    <div class="bg-surface-900 text-surface-100 py-1 px-6 lg:px-20 flex justify-between items-center flex-wrap">
      <div class="font-bold">🔥 Hot Deals!</div>
      <div class="inline-flex gap-1 items-center">
        <span class="hidden lg:flex leading-normal">Libero voluptatum atque exercitationem praesentium provident
          odit.</span>
        <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
      </div>
      <Button icon="pi pi-times" text rounded severity="secondary" class="text-surface-0! hover:bg-surface-500/20!"
        @click="close" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(true);

function close() {
  isOpen.value = !isOpen.value;
}
</script>