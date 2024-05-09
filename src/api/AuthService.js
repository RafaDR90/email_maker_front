import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./ApiConstants";

export default class AuthService {
  static async login(email, password) {
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, {
        email,
        password,
      });

      if (!response.data.token) {
        throw new Error("Usuario o contraseña incorrectos");
      }

      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  }

  static async register(name, email, password, confirmPassword) {
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.REGISTER}`, {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || "Error al registrarse");
      }

      return response.data;
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw error;
    }
  }
}
