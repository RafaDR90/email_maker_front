import { defineStore } from "pinia";

export const productItems = defineStore({
  id: "productItems",
  state: () => ({
    productsList: [],
    defaultProductList: [
      {
        id: 0,
        oferta: 0,
        pvd: "31.50",
        pvd_estandar: "31.50",
        referencia: "REF-Ejemplo",
        titulo_small: "Titulo ejemplo 2829e wifi color",
        descripcion: "Ejemplo descripción 2829e",
        url_imagen_compress: null,
        url_product: "#",
      },
      {
        id: 1,
        oferta: 1,
        pvd: "27.50",
        pvd_estandar: "33",
        referencia: "REF-Ejemplo-2",
        titulo_small: "Titulo ejemplo 1113 14.6 pulgadas 16gb",
        descripcion: "Ejemplo descripción 1113",
        url_imagen_compress: null,
        url_product: "#",
      },
    ],
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
    setProductDescription(id, description) {
      this.productsList.find((product) => product.id === id).descripcion =
      description;
    },
    setProductImgUrl(id, imgUrl) {
      this.productsList.find(
        (product) => product.id === id
      ).url_imagen_compress = imgUrl;
    },
    setProductButtonUrl(id, buttonUrl) {
      this.productsList.find((product) => product.id === id).url_product =
        buttonUrl;
    },
    getLastProduct() {
      return this.productsList[this.productsList.length - 1];
    },
    getProductById(id) {
      return this.productsList.find((product) => product.id === id);
    },
    removeProductById(id) {
      if (id < this.productsList.length) {
        this.productsList.splice(id, 1);
        for (let i = 0; i < this.productsList.length; i++) {
          this.productsList[i].id = i;
        }
      }
    },
  },
});
