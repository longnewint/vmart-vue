<template>
  <Toast></Toast>
  <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="true" :validateOnBlur="true"
    @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col justify-start">
      <div class="flex gap-1">
        <IftaLabel class="w-1/3">
          <InputText name="streetNumber" type="text" fluid></InputText>
          <label for="streetNumber">Street number</label>
          <Message v-if="$form.streetNumber?.invalid" severity="error" size="small" variant="simple">{{
            $form.streetNumber.error.message }}</Message>
        </IftaLabel>
        <IftaLabel class="w-2/3">
          <InputText name="addressLine" type="text" fluid></InputText>
          <label for="addressLine">Address line</label>
          <Message v-if="$form.addressLine?.invalid" severity="error" size="small" variant="simple">{{
            $form.addressLine.error.message }}</Message>
        </IftaLabel>
      </div>
      <div class="flex gap-1">
        <iftaLabel class="w-4/7">
          <InputText name="city" type="text" fluid :formControl="{ validateOnValueUpdate: true }"></InputText>
          <label for="city">City</label>
          <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">{{
            $form.city.error.message }}</Message>
        </iftaLabel>
        <iftaLabel class="w-2/7">
          <Select name="province" :options="provinces" optionLabel="code" fluid></Select>
          <label for="province">Province</label>
          <Message v-if="$form.province?.invalid" severity="error" size="small" variant="simple">{{
            $form.province.error.message }}</Message>
        </iftaLabel>
      </div>
      <div class="flex gap-1">
        <IftaLabel class="w-3/7">
          <InputText name="postalCode" type="text" fluid />
          <label for="postalCode">Postal code</label>
          <Message v-if="$form.postalCode?.invalid" severity="error" size="small" variant="simple">{{
            $form.postalCode.error.message }}</Message>        
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
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const emit = defineEmits(['addressAdded'])

const initialValues = ref({
  streetNumber: '',
  addressLine: '',
  city: '',
  province: '',
  postalCode: ''
})

const provinces = ref([
  { name: 'Alberta', code: 'AB' },
  { name: 'British Columbia', code: 'BC' },
  { name: 'Manitoba', code: 'MB' },
  { name: 'New Brunswick', code: 'NB' },
  { name: 'Newfoundland and Labrador', code: 'NL' },
  { name: 'Nova Scotia', code: 'NS' },
  { name: 'Ontario', code: 'ON' },
  { name: 'Prince Edward Island', code: 'PE' },
  { name: 'Quebec', code: 'QC' },
  { name: 'Saskatchewan', code: 'SK' }
])

const resolver = ({ values }) => {
  const errors = {};

  if (!values.streetNumber) {
    errors.streetNumber = [{ message: 'Street number is required.' }];
  }

  if (!values.addressLine) {
    errors.addressLine = [{ message: 'Address line is required.' }];
  }

  if (!values.city) {
    errors.city = [{ message: 'City is required.' }];
  }

  if (!values.province) {
    errors.province = [{ message: 'Province is required.' }];
  }
  if (!values.postalCode) {
    errors.postalCode = [{ message: 'Postal code is required.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
    emit('addressAdded', 'New Address is added')
  }
}
</script>