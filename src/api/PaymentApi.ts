import ky from "ky"
import { ApiConfig } from "./ApiConfig"
import type { PaymentForm } from "../store/PaymentStore"

export const PaymentApi = {
  get(customerId: number) {
    return ky.get(ApiConfig.urlPath + "/payment/").json()
  },

  post(customerId: number, payment: PaymentForm) {
    return ky.post(ApiConfig.urlPath + "/payment/", {
      json: {
        paymentTypeId: payment.paymentTypeId,
        cardNumber: payment.cardNumber,
        expMonth: payment.expMonth,
        expYear: payment.expYear,
        cvv: payment.cvv
      }
    }).json()
  }
}