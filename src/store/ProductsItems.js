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
      console.log("PRE", this.productsList[id]);
      this.productsList[id] = product;
      console.log("POST", this.productsList[id]);
      console.log(this.productsList[id]);
    },
    setProductTitle(id, title) {
      this.productsList.find((product) => product.id === id).titulo_small =
        title;
    },
    getLastProduct() {
      return this.productsList[this.productsList.length - 1];
    },
    getProductById(id) {
      return this.productsList.find((product) => product.id === id);
    },
  },
});
