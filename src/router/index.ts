import { createRouter, createWebHistory } from "vue-router"
import Layout from './../layout/Layout.vue'
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router