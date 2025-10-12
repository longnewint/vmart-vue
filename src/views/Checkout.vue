<template>
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
            <a>Here</a>
          </div>
          <div class="flex p-3 gap-2 justify-end">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="toPayment(activateCallback)" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
    <div class="flex">
      <Button asChild v-slot="slotProps" severity="secondary">
        <RouterLink to="/" :class="slotProps.class">Cancel</RouterLink>
      </Button>
      <Button label="Checkout"></Button>
    </div>
  </div>
</template>

<script setup>
import { useDeliveryStore } from '../store/DeliveryStore'


const deliveryStore = useDeliveryStore()

function toOrder(callback) {
  callback('1')
}

function toShipping(callback) {
  callback('2')
}

function toPayment(callback) {
  callback('3')
}
</script>