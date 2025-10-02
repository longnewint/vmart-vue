import ky from "ky"

export const ProductApi = {
  getData(category_id: number) {
    return ky.get("http://localhost:8080/product/c/" + category_id + "?storeId=101").json()
  }
}