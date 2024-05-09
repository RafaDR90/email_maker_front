import { defineStore } from "pinia";

export const useProductVars = defineStore({
  id: "productVars",
  state: () => ({
    productsList: new Set(),
  }),
  actions: {
    // Agrega un método para añadir un producto al conjunto
    addProduct(product) {
      this.productsList.add(product);
    },
  },
});
