<template>
  <DataView :value="products" layout="grid">
    <template #header>
      <h1>Products</h1>
    </template>

    <template #grid="slotProps">
      <div class="grid grid-cols-12 gap-2">
        <div v-for="(item, index) in slotProps.items" :key="index"
          class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4 p-2">
          <div
            class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
            <div class="bg-surface-50 flex justify-center rounded p-4">
              <div class="relative mx-auto">
                <img class="rounded w-full" :src="img" :alt="item.productName" style="max-width: 300px" />
                <div class="absolute" style="right: 4px; top: 4px">
                  <Button icon="pi pi-plus" @click="cart.add(item)"></Button>
                </div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flex justify-between items-start gap-2">
                <div>
                  <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.brand }}</span>
                  <div class="text-lg font-medium mt-1">{{ item.productName }}</div>
                </div>
              </div>
              <div class="flex justity-between gap-6 mt-6">
                <div class="text-2xl font-semibold">${{ item.listPrice }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ProductApi } from '../api/ProductApi';
import { useCartStore } from '../store/CartStore';
import img from './../assets/no_image_available.webp'

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