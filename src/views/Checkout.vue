<template>
  <Toast></Toast>
  <div class="card flex flex-col justify-center items-center">
    <Stepper value="1">
      <StepItem value="1">
        <Step>Review your Order</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="w-3xl">
            <div>
              <ConfirmOrder></ConfirmOrder>
            </div>
            <div class="flex p-3 gap-2 justify-end">
              <Button label="Next" @click="toShipping(activateCallback)" />
            </div>

          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>Shipping information</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="w-3xl">
            <AddressSelect></AddressSelect>
          </div>
          <div class="flex p-3 gap-2 justify-end">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <div v-if="deliveryStore.selected === null">
              <Button label="Next" disabled></Button>
            </div>
            <div v-else>
              <Button @click="toPayment(activateCallback)" label="Next"></Button>
            </div>
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Payment</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="w-3xl">
            <PaymentSelect></PaymentSelect>
          </div>
          <div class="flex p-3 gap-2 justify-end">
            <Button label="Back" severity="secondary" @click="toShipping(activateCallback)" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
    <div class="flex">
      <div>
        <Button label="Cancel" severity="secondary" @click="cancelCheckout"></Button>
      </div>
      <div v-if="deliveryStore.selected === null || paymentStore.selected === null">        
        <Button label="Place Order" disabled></Button>
      </div>
      <div v-else>
        <Button label="Place Order"></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useDeliveryStore } from '../store/DeliveryStore'
import { usePaymentStore } from '../store/PaymentStore'

const deliveryStore = useDeliveryStore()
const paymentStore = usePaymentStore()

const router = useRouter()

function toOrder(callback) {
  callback('1')
}

function toShipping(callback) {
  callback('2')
}

function toPayment(callback) {
  callback('3')
}

function cancelCheckout() {
  deliveryStore.selected = null
  paymentStore.selected = null
  router.push({ path: '/' })
}
</script>