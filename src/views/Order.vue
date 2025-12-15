<template>
  <div class="flex justify-center">
    <DataTable :value="orderStore.orders" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <a class="text-xl font-bold">Orders</a>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column field="storeName" header="Store"></Column>
      <Column field="shippingMethodId" header="Order type">
        <template #body="slotProps">
          {{ shippingMethodValue[slotProps.data.shippingMethodId] }}
        </template>
      </Column>
      <Column field="orderDate" header="Order date">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.orderDate) }}
        </template>
      </Column>
      <Column field="orderTotal" header="Total"></Column>
      <Column field="orderStatusId" header="Status">
        <template #body="slotProps">
          <div class="flex items-center">
            <div v-if="slotProps.data.orderStatusId === 4">
              <Button :label="orderStatusValue[slotProps.data.orderStatusId]" variant="text"></Button>
            </div>
            <div v-else>
              <Button :label="orderStatusValue[slotProps.data.orderStatusId]" variant="text"
                severity="secondary"></Button>
              <Button label="Complete"></Button>
            </div>
          </div>
        </template>
      </Column>
      <Column header="Details">
        <template #body="slotProps">
          <Button type="button" @click="toggle(slotProps.data.orderId)" icon="pi pi-search" severity="secondary"
            rounded></Button>
        </template>
      </Column>
    </DataTable>
  </div>
  <div v-if="orderStore.orderDetail">
  <Dialog v-model:visible="visible" modal header="Order details" :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <p>{{ orderStore.order.orderTotal }}</p>
    <DataTable :value="orderStore.orderDetail.items" tableStyle="min-width: 50rem">
      <Column field="productName" header="Name">
        <template #body="slotProps">
          {{ slotProps.data.productName }}
        </template>
      </Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="img" :alt="slotProps.data.thumbnailUrl" class="w-24 rounded" />
        </template>
      </Column>
      <Column field="listPrice" header="Price">
        <template #body="slotProps">
          {{ slotProps.data.listPrice }}
        </template>
      </Column>
      <Column field="quantity" header="Qty">
        <template #body="slotProps">
          {{ slotProps.data.quantity }}
        </template>
      </Column>
    </DataTable>
    <template #footer>
      <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
    </template>
  </Dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { shippingMethodValue, orderStatusValue, useOrderStore } from '../store/OrderStore';
import img from './../assets/no_image_available.webp'

const orderStore = useOrderStore()
const visible = ref(false)

onMounted(() => {
  orderStore.fetchData()
})

function toggle(orderId) {
  orderStore.chooseOrder(orderId)
  orderStore.fetchOrder(orderId)
  visible.value = true
}

function formatDate(timestamp) {
  const date = new Date(timestamp)

  return date.toDateString()
}
</script>