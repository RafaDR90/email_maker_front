import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./ApiConstants";

export default class ProductService {
  static async fetchAllProducts() {
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.PRODUCTS_ALL}`);
      return response.data;
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      throw error;
    }
  }
  static async fetchTenProducts() {
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.PRODUCTS_TEN}`);
      return response.data;
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      throw error;
    }
  }
}
