import { defineStore } from "pinia";

export const productItems = defineStore({
  id: "productItems",
  state: () => ({
    productsList: [],
  }),
  actions: {
    addProduct() {
      this.productsList.push({ id: this.productsList.length });
    },
    editProduct(id, product) {
      product.id = id;
      this.productsList[id] = product;
    },
    getLastProduct(){
      return this.productsList[this.productsList.length-1];
    }
  },
});
