
<template>
  <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="true" :validateOnBlur="true"
    @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col justify-start">
      <div class="flex gap-1">
        <iftaLabel class="w-3/5">
          <Select name="paymentTypeId" :options="paymentStore.paymentTypeValue" optionLabel="value" optionValue="id" class="w-full"></Select>
          <label for="paymentTypeId">Payment type</label>
          <Message v-if="$form.paymentTypeId?.invalid" severity="error" size="small" variant="simple">{{
            $form.paymentTypeId.error.message }}</Message>
        </iftaLabel>
      </div>
      <div class="flex gap-1">
        <iftaLabel class="w-full">
          <InputText name="cardNumber" type="text" fluid :formControl="{ validateOnValueUpdate: true }"></InputText>
          <label for="cardNumber">Card number</label>
          <Message v-if="$form.cardNumber?.invalid" severity="error" size="small" variant="simple">{{
            $form.cardNumber.error.message }}</Message>
        </iftaLabel>
      </div>
      <div class="flex gap-1">
        <IftaLabel class="w-2/7">
          <InputText name="expMonth" type="text" fluid />
          <label for="expMonth">expMonth</label>
          <Message v-if="$form.expMonth?.invalid" severity="error" size="small" variant="simple">{{
            $form.expMonth.error.message }}</Message>        
        </IftaLabel>
        <IftaLabel class="w-2/7">
          <InputText name="expYear" type="text" fluid />
          <label for="expYear">expYear</label>
          <Message v-if="$form.expYear?.invalid" severity="error" size="small" variant="simple">{{
            $form.expYear.error.message }}</Message>        
        </IftaLabel>
        <IftaLabel class="w-3/7">
          <InputText name="cvv" type="text" fluid />
          <label for="cvv">CVV</label>
          <Message v-if="$form.cvv?.invalid" severity="error" size="small" variant="simple">{{
            $form.cvv.error.message }}</Message>        
        </IftaLabel>
      </div>
      <div class="flex justify-end">
        <Button type="submit" severity="secondary" label="Submit" />
      </div>
    </div>
  </Form>
</template>

<script setup>
import { ref } from 'vue';
import { usePaymentStore } from '../../store/PaymentStore';

const paymentStore = usePaymentStore()
const emit = defineEmits(['paymentAdded'])

const initialValues = ref({
  paymentTypeId: 0,
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvv: '',
})

const resolver = ({ values }) => {
  const errors = {};

  if (!values.paymentTypeId) {
    errors.paymentTypeId = [{ message: 'Payment type is required.' }];
  }

  if (!values.cardNumber) {
    errors.cardNumber = [{ message: 'Card number is required.' }];
  }

  if (!values.expMonth) {
    errors.expMonth= [{ message: 'expMmonth is required.' }];
  }

  if (!values.expYear) {
    errors.expYear = [{ message: 'expYear is required.' }];
  }
  if (!values.cvv) {
    errors.cvv = [{ message: 'cvv is required.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ( e ) => {
  if (e.valid) {
    const s = e.states
    const newPayment = {
      paymentTypeId: s.paymentTypeId.value, 
      cardNumber: s.cardNumber.value,
      expMonth: s.expMonth.value,
      expYear: s.expYear.value,
      cvv: s.cvv.value
    }

    paymentStore.add(newPayment)
    emit('paymentAdded', 'New Payment is added')
  }
}
</script>