import { defineStore } from "pinia"
import { ref } from "vue"
import { PaymentApi } from "../api/PaymentApi"


export type Payment = {
  paymentMethodId: number
  paymentTypeId: number
  cardNumber: string
}

export type PaymentForm = {
  paymentTypeId: number
  cardNumber: string
  expMonth: string
  expYear: string
  cvv: string
}

export const usePaymentStore = defineStore('paymentStore', () => {
  const loading = ref(false)
  const error = ref()
  let payments = ref<Payment[] | null>()
  const selected = ref(null)
  const paymentTypeValue = ref([
    { id: 0, value: 'Cash' },
    { id: 1, value: 'Visa' },
    { id: 2, value: 'Mastercard' }, 
    { id: 3, value: 'American Express' }
  ])

  async function fetchData() {
    error.value = payments.value = null
    loading.value = true

    try {
      payments.value = await PaymentApi.get(12321) as Payment[]
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  async function add(payment: PaymentForm) {
    const p_id = await PaymentApi.post(12321, payment) as number
    const newPayment = {
      paymentMethodId: p_id,
      paymentTypeId: payment.paymentTypeId,
      cardNumber: payment.cardNumber.substring(12)
    }

    payments.value?.push(newPayment)
  }

  return { loading, error, payments, selected, paymentTypeValue, fetchData, add }
})