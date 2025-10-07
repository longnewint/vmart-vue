import { createRouter, createWebHistory } from "vue-router"
import Layout from './../layout/Layout.vue'
import Home from "../views/Home.vue"
import Category from "../views/Category.vue"
import Checkout from "../views/Checkout.vue"

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: Category
      }
    ]
  },
  {
    path: '/checkout',
    component: Checkout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router