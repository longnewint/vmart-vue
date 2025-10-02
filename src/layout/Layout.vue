<template>
  <Header class="sticky top-0"></Header>
  <RouterView></RouterView>
  <li v-for="i in cart.cartItems">{{ i.productName}}</li>
  <p>{{ cart.orderCount}}</p>
  <p>{{ cart.orderTotal }}</p>
  <Footer></Footer>
</template>

<script setup>
import { useCartStore } from '../store/CartStore';


const cart = useCartStore()
cart.fetch()
</script>