import { defineStore } from "pinia";

export const productItems = defineStore({
  id: "productItems",
  state: () => ({
    productsList: []
  }),
  actions: {
    addProduct() {
      this.productsList.push({id: this.productsList.length});
    },
    editProduct(product) {
      const index = this.productsList.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.productsList[index] = product;
      }
    }
  },
});