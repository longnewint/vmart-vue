<template>
  <div class="card">
    <Stepper value="1">
      <StepItem value="1">
        <Step>Review your Order</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content I</div>
          </div>
          <div class="py-6">
            <Button label="Next" @click="toShipping(activateCallback)" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>Shipping information</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II</div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="toPayment(activateCallback)" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Payment</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content III</div>
          </div>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<script setup>

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