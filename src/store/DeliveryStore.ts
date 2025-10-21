import { defineStore } from "pinia"
import { ref } from "vue"
import { DeliveryApi } from "../api/DeliveryApi"

export type Address = {
  addressId: number
  unitNumber: number
  streetNumber: number
  addressLine1: string
  addressLine2: string
  city: string
  province: string
  postalCode: string
}

export const useDeliveryStore = defineStore('deliveryStore', () => {
  const loading = ref(false)
  const error = ref()
  let addresses = ref<Address[] | null>()
  const selected = ref(null)

  async function fetchData() {
    error.value = addresses.value = null
    loading.value = true

    try {
      addresses.value = await DeliveryApi.get(12321) as Address[]
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  async function add(address: Address) {
    const a_id = await DeliveryApi.post(12321, address) as number
    address.addressId = a_id

    addresses.value?.push(address)
  }

  return { loading, error, addresses, selected, fetchData, add }
})