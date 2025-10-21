<template>
  <div class="card flex">
    <div class="flex flex-col gap-4">
      <div>
        <h1>Select payment method</h1>
      </div>
      <div v-for="p in paymentStore.payments" class="flex gap-2">
        <RadioButton v-model="paymentStore.selected" :inputId="p.paymentMethodId.toString()" :value="p.paymentMethodId" />
        <label :for="p.paymentMethodId">
          {{ formatPayment(p.paymentTypeId, p.cardNumber) }}
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
      <PaymentForm @payment-added="hideDialog"></PaymentForm>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { usePaymentStore } from '../../store/PaymentStore';
import { useToast } from 'primevue';

const paymentStore = usePaymentStore()
paymentStore.fetchData()

const toast = useToast()

const visible = ref(false)

function hideDialog() {
  visible.value = false
  toast.add({ severity: 'success', summary: `New payment added`, life: 3000 })
}

function formatPayment(paymentTypeId, cardNumber) {
  const cardType = paymentStore.paymentTypeValue[paymentTypeId].value
  return `${cardType} ends in ${cardNumber}`
}

</script>