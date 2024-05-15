<script setup>
import { documentActions } from "../../../store/DocumentActions";
import { watch, ref } from "vue";
import { productItems } from "../../../store/ProductsItems";
import AutocompleteForm from "./mini_components/AutocompleteForm.vue";
import ProductService from "../../../api/ProductService";
import { cardStyle } from "../../../store/CardStyle";
import RegularInput from "./mini_components/RegularInput.vue";
import NumberInput from "./mini_components/NumberInput.vue";

const cardStyleStore = cardStyle();

const foundProductsRef = ref([]);

const searchProducts = (search) => {
  ProductService.fetch10ProductsWithRef(search).then((response) => {
    foundProductsRef.value = response;
  });
};

const documentActionsStore = documentActions();
const productsItemsStore = productItems();
const selectedProduct = ref(null);

/** */
const productTitle = ref("");
const productPvd = ref(selectedProduct.pvd || 0);

watch(documentActionsStore, () => {
  selectedProduct.value =
    productsItemsStore.productsList[documentActionsStore.selectedCard];
});

const setProduct = (product) => {
  productsItemsStore.editProduct(documentActionsStore.selectedCard, product);
  selectedProduct.value = product;
};

const data = ref({
  title: "",
  placeholder: "Introduce texto",
});

function hasMultipleFields(selectedProduct) {
  return Object.keys(selectedProduct.value).length > 1;
}

watch(selectedProduct, () => {
  console.log("SELECTED PRODUCT", selectedProduct.value);
  if (!hasMultipleFields(selectedProduct)) {
    return false;
  }

  productTitle.value = selectedProduct.value.titulo_small;
  data.title = productTitle.value;
});

function updateProductCardTitle(title) {
  productsItemsStore.setProductTitle(documentActionsStore.selectedCard, title);
}

function newFun(newVal) {
  console.log("NewVal", newVal);
  console.log("NEWFUN PRODUCT", selectedProduct.value);
  let p = productsItemsStore.getProductById(selectedProduct.value.id);
  console.log("P", p);
  if (p.oferta == 1) {
    p.pvd = newVal.toString();
  } else {
    p.pvd_estandar = newVal.toString();
  }
  productsItemsStore.editProduct(p.id, p);
  //selectedProduct.pvd = newVal;
}
</script>

<template>
  <div id="container" class="flex flex-col w-full items-center">
    <h2>Producto {{ documentActionsStore.selectedCard + 1 }}</h2>
    <div class="divider" />
    <AutocompleteForm
      :foundProducts="foundProductsRef"
      @search="searchProducts"
      @exportResult="setProduct"
    />
    <h3>Título:</h3>
    <RegularInput :textList="data" :onChange="updateProductCardTitle" />
    <h3>Precio:</h3>
    <NumberInput :value="productPvd" :valueUpdate="newFun" />
    <h3>Oferta:</h3>
    <NumberInput :value="0" />
  </div>
</template>