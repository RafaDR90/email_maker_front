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
  static async fetch10ProductsWithRef(ref) {
    try {
      const response = await axios.post(`${BASE_URL}/products/search`, { reference: ref });
      return response.data;
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      throw error;
    }
  }
  static async uploadStylesData(data) {
    console.log(`${BASE_URL}/products/styles-upload`)
    try {

      const response = await axios.post(`${BASE_URL}/products/styles-upload`, { data: data }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      throw error;
    }
  }
}
