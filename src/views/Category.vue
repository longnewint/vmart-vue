<template>
  <h1>Category Component</h1>
  <li v-for="p in products">
    {{ p.productName }}
    <Button icon="pi pi-plus" @click="cart.add(p)"></Button>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ProductApi } from '../api/ProductApi';
import { useCartStore } from '../store/CartStore';

const cart = useCartStore()

const route = useRoute()

const loading = ref(false)
const error = ref(null)
const products = ref(null)

watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  error.value = products.value = null
  loading.value = true

  try {
    products.value = await ProductApi.getData(id)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>