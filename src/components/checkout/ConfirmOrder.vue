<template>
  <DataView :value="cart.cartItems">
    <template #list="slotProps">
      <div class="flex flex-col">
        <div v-for="(item, index) in slotProps.items" :key="index">
          <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
            :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
            <div class="md:w-40 relative">
              <img class="block xl:block mx-auto rounded w-full" :src="img" :alt="item.productName" />
            </div>
            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
              <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                <div>
                  <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.brand
                  }}</span>
                  <div class="text-lg font-medium mt-2">{{ item.productName }}</div>
                </div>
              </div>
              <div class="flex flex-col md:items-end gap-3">
                <span class="text-xl font-semibold">${{ item.listPrice }}</span>
                <span class="text-xl font-semibold">Qty: {{ item.quantity }}</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <Button label="Remove" severity="danger" @click="cart.remove(item.productId)"
                    class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                  <Button icon="pi pi-plus" @click="cart.add(item)"
                    class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script setup>
import { useCartStore } from '../../store/CartStore';
import img from './../../assets/no_image_available.webp'

const cart = useCartStore()
cart.fetchData()
</script>