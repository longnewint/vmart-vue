import ky from "ky"
import { ApiConfig } from "./ApiConfig"

export const CartApi = {
  getData() {
    return ky.get(ApiConfig.urlPath + "/cart/1234321").json()
  },

  post(id: number, qty: number) {
    return ky.post(ApiConfig.urlPath + "/cart/1234321", {json: {productId: id, quantity: qty}}).json
  }
}