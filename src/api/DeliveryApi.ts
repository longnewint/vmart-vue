import ky from "ky"
import { ApiConfig } from "./ApiConfig"
import type { Address } from "../store/DeliveryStore"

export const DeliveryApi = {
  get(customerId: number) {
    return ky.get(ApiConfig.urlPath + "/delivery/").json()
  },

  post(customerId: number, address: Address) {
    return ky.post(ApiConfig.urlPath + "/delivery/", {
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