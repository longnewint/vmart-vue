import ky from "ky"
import type { PaymentForm } from "../store/PaymentStore"

export const PaymentApi = {
  get(customerId: number) {
    return ky.get("http://localhost:8080/payment/").json()
  },

  post(customerId: number, payment: PaymentForm) {
    return ky.post("http://localhost:8080/payment/", {
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