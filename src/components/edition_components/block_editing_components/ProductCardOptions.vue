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

const productTitle = ref("");

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


const data = ref({
  title: '',
  placeholder: 'Introduce texto'
})

function hasMultipleFields(selectedProduct) {
  return Object.keys(selectedProduct.value).length > 1;
}


watch(selectedProduct, () => {
  if(!hasMultipleFields(selectedProduct)){
    return false;
  }

  productTitle.value = selectedProduct.value.titulo_small;
  console.log("Product title:",productTitle.value);
  console.log(selectedProduct.value);
});

function updateProductCardTitle(title){

  productsItemsStore.setProductTitle(selectedProduct.value,title);
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
    <RegularInput :textList="data" :onChange="updateProductCardTitle"/>
    <h3>Precio:</h3>
    <NumberInput :textList="data" />
    <h3>Oferta:</h3>
    <NumberInput :value="0"  />
  </div>
</template>