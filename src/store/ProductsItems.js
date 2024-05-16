import { defineStore } from "pinia";

export const productItems = defineStore({
  id: "productItems",
  state: () => ({
    productsList: [],
    defaultProductList: [{
      id: 0,
      oferta: 0,
      oferta_pvd: '31.50',
      pvd_estandar: '31.50',
      referencia: "REF-Ejemplo",
      titulo_small: "Titulo ejemplo 2829e wifi color",
      url_imagen_compress: null,
      url_product: "#",
    },
    {
      id: 1,
      oferta: 1,
      oferta_pvd: '27.50',
      pvd_estandar: '33',
      referencia: "REF-Ejemplo-2",
      titulo_small: "Titulo ejemplo 1113 14.6 pulgadas 16gb ssd512gb",
      url_imagen_compress: null,
      url_product: "#",
    }]
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
