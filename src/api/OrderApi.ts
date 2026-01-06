import ky from "ky"
import { ApiConfig } from "./ApiConfig"

export const OrderApi = {
  get() {
    return ky.get(ApiConfig.urlPath + "/order/").json()
  },

  getById(id: number) {
    return ky.get(ApiConfig.urlPath + "/order/" + id).json()
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