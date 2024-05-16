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
      this.productsList.find((product) => product.id === id).titulo_small =
        title;
    },
    setProductImgUrl(id, imgUrl) {
      this.productsList.find((product) => product.id === id).url_imagen_compress = imgUrl;
    },
    setProductButtonUrl(id, buttonUrl) {
      this.productsList.find((product) => product.id === id).url_product = buttonUrl;
    },
    getLastProduct() {
      return this.productsList[this.productsList.length - 1];
    },
    getProductById(id) {
      return this.productsList.find((product) => product.id === id);
    },
  },
});
