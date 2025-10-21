import ky from "ky"
import type { Address } from "../store/DeliveryStore"

export const DeliveryApi = {
  get(customerId: number) {
    return ky.get("http://localhost:8080/delivery/").json()
  },

  post(customerId: number, address: Address) {
    return ky.post("http://localhost:8080/delivery/", {
      json: {
        streetNumber: address.streetNumber,
        addressLine1: address.addressLine1,
        city: address.city,
        province: address.province,
        postalCode: address.postalCode
      }
    }).json()
  }
}