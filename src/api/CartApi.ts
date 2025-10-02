import ky from "ky"

export const CartApi = {
  getData() {
    return ky.get("http://localhost:8080/cart/1234321").json()
  }
}