<script setup>
import { documentActions } from "../../../store/DocumentActions";
import { watch, ref } from "vue";
import { productItems } from "../../../store/ProductsItems";
import AutocompleteForm from "./mini_components/AutocompleteForm.vue";
import ProductService from "../../../api/ProductService";
import { cardStyle } from "../../../store/CardStyle";

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

watch(
  () => documentActionsStore.selectedCard,
  () => {
    selectedProduct.value =
      productsItemsStore.productsList[documentActionsStore.selectedCard];
  }
);

const setProduct = (product) => {
  productsItemsStore.editProduct(documentActionsStore.selectedCard, product);
};
</script>

<template>
  <div>
    <AutocompleteForm
      :foundProducts="foundProductsRef"
      @search="searchProducts"
      @exportResult="setProduct"
    />
  </div>
</template>