<template>
  <div class="card flex">
    <div class="flex flex-col gap-4">
      <div>
        <h1>Select shipping address</h1>
      </div>
      <div v-for="a in deliveryStore.addresses" class="flex gap-2">
        <RadioButton v-model="deliveryStore.selected" :inputId="a.addressId.toString()" :value="a.addressId" />
        <label :for="a.addressId">
          {{ formatAddress(a.streetNumber, a.addressLine1, a.city, a.province, a.postalCode) }}
        </label>
      </div>
      <div>
        <Button variant="outlined" label="Add" @click="visible = true"></Button>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '30rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div>
      <AddressForm @address-added="hideDialog"></AddressForm>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useDeliveryStore } from '../../store/DeliveryStore';
import AddressForm from './AddressForm.vue';
import { useToast } from 'primevue';

const deliveryStore = useDeliveryStore()
deliveryStore.fetchData()

const toast = useToast()

const visible = ref(false)

function hideDialog() {
  visible.value = false
  toast.add({ severity: 'success', summary: `New address added`, life: 3000 })
}

function formatAddress(streetNumber, addressLine, city, province, postalCode) {
  return `${streetNumber} ${addressLine}, ${city} ${province} ${postalCode}`
}

</script>