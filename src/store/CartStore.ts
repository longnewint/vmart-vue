import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { CartApi } from '../api/CartApi'

export type CartItem = {
  productId: number
  brand: string
  productName: string
  listPrice: number
  discountPrice: number
  packageSize: string
  thumbnailUrl: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const loading = ref(false)
  const error = ref()
  let cartItems = ref<CartItem[] | null>()

  const orderCount = computed(() => cartItems.value?.length.toString())
  const orderTotal = computed(() => {
    if (!cartItems.value) return 0
    else {
      let total = 0
      cartItems.value.forEach(item => total += item.quantity * item.listPrice)

      return `$${total.toFixed(2)}`
    }
  })

  async function fetchData() {
    error.value = cartItems.value = null
    loading.value = true

    try {
      cartItems.value = await CartApi.getData() as CartItem[]
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  function add(item: CartItem) {
    let inCart = false
    cartItems.value?.forEach(i => {
      if (item.productId === i.productId) {
        inCart = true
        i.quantity++
      }
    })

    if (!inCart) {
      item.quantity = 1
      cartItems.value?.push(item)
    }
  }

  function remove(id: number) {
    const index = cartItems.value?.findIndex(item => item.productId === id)

    if (index !== -1)
      cartItems.value?.splice(index as number, 1)
  }

  return { loading, error, orderCount, orderTotal, cartItems, fetchData, add, remove }
})