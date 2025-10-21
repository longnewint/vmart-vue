import ky from "ky"

export const OrderApi = {
  get() {
    return ky.get("http://localhost:8080/order/").json()
  },

  getById(id: number) {
    return ky.get("http://localhost:8080/order/" + id).json()
  },

}