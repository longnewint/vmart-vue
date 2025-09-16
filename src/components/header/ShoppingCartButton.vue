<template>
  <Button type="button" icon="pi pi-shopping-cart" severity="contrast" :badge="itemNumString" badgeSeverity="contrast" variant="outlined" />
</template>
<script setup>
import { computed, ref } from "vue";

const itemNum = ref("0");
const itemNumString = computed(() => itemNum.value.toString());
</script>