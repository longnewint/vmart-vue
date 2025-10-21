import { defineStore } from "pinia"
import { ref } from "vue"
import { OrderApi } from "../api/OrderApi"

export type Order = {
  orderId: number
  storeName: string
  shippingMethodId: number
  orderDate: number
  orderTotal: number
  orderStatusId: string
}

export type OrderItem = {
  productId: number
  brand: string
  productName: string
  listPrice: number
  discountPrice: number
  packageSize: string
  thumbnailUrl: string
  quantity: number
}

export type OrderDetail = {
  orderId: number
  unitNumber: number
  streetNumber: number
  addressLine1: string
  addressLine2: string
  city: string
  province: string
  postalCode: string
  items: OrderItem[]
}

export const shippingMethodValue = ['Pickup', 'Delivery', 'Express Delivery']
export const orderStatusValue = ['Cancel', 'Preparing', 'Waiting for customer/courier pick up', 'Delivering', 'Completed']

export const useOrderStore = defineStore('orderStore', () => {
  const loading = ref(false)
  const error = ref()
  let orders = ref<Order[] | null>(null)

  const orderDetail = ref<OrderDetail | null>()

  

  async function fetchData() {
    error.value = orders.value = null
    loading.value = true

    try {
      orders.value = await OrderApi.get() as Order[]
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  async function fetchOrder(id: number) {
    error.value = orderDetail.value = null
    loading.value = true

    try {
      orderDetail.value = await OrderApi.getById(id) as OrderDetail
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }


  return { loading, error, orders, orderDetail, fetchData, fetchOrder }
})