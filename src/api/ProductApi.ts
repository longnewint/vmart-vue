import ky from "ky"
import { ApiConfig } from "./ApiConfig"

export const ProductApi = {
  getData(category_id: number) {
    return ky.get(ApiConfig.urlPath + "/product/c/" + category_id + "?storeId=101").json()
  }
}