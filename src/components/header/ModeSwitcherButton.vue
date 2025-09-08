<template>
  <Button :icon="iconProps" severity="secondary" @click="toggleDarkMode" aria-label="switcherButton"></Button>
</template>
<script setup>
import { ref, computed } from "vue";

const isDarkMode = ref(false);
toggleDarkMode();

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('my-app-dark');
}

const iconProps = computed(() => isDarkMode.value ? 'pi pi-sun' : 'pi pi-moon');
</script>
