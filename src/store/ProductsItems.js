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
    setProductTitle(id, title) {
      console.log(this.productsList.find((product) => product.id === id));
      let product = this.productsList.find((product) => product.id === id);
      product.titulo = title;
    },
    getLastProduct() {
      return this.productsList[this.productsList.length - 1];
    },
    getProductById(id) {
      return this.productsList.find((product) => product.id === id);
    },
  },
});
