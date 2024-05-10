import { defineStore } from "pinia";

export const useProductVars = defineStore({
  id: "productVars",
  state: () => ({
    productsList: new Set(), //Set para que no se repitan los productos iguales
  }),
  actions: {
    addProduct(product) {
      this.productsList.add(product);
    },
  },
});
