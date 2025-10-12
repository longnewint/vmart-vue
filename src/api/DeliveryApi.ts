import ky from "ky"

export const DeliveryApi = {
  get(customerId: number) {
    return ky.get("http://localhost:8080/delivery/" + customerId).json()
  }
}