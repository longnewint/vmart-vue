import ky from "ky"
import { ApiConfig } from "./ApiConfig"

export const OrderApi = {
  get() {
    return ky.get(ApiConfig.urlPath + "/order/").json()
  },

  getById(id: number) {
    return ky.get(ApiConfig.urlPath + "/order/" + id).json()
  },
  
  placeOrder(storeId: number, cartId: number, shippingMethodId: number, addressId: number, paymentId: number) {
    return ky.post(ApiConfig.urlPath + "/order/", {
      json: {
        storeId: storeId,
        cartId: cartId,
        shippingMethodId: shippingMethodId,
        addressId: addressId,
        paymentId: paymentId
      }
    }).json()
  },

  updateStatus(statusId: number, orderIdtt: number) {
    return ky.post(ApiConfig.urlPath + "/order/status", {
      json: {
        orderStatusId: statusId,
        orderId: orderIdtt
      }
    }).json()
  }

}