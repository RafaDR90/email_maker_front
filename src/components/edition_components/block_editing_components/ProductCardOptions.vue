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

/** Variables Cards **/
const productTitle = ref("");
const productPvdEstandar = ref(0);
const productPvd = ref(0);

watch(documentActionsStore, () => {
  selectedProduct.value =
    productsItemsStore.productsList[documentActionsStore.selectedCard];
});

const setProduct = (product) => {
  productsItemsStore.editProduct(documentActionsStore.selectedCard, product);
  selectedProduct.value = product;
  productPvdEstandar.value = selectedProduct.value.pvd_estandar;
  productPvd.value = selectedProduct.value.pvd;
};

const data = ref({
  title:
    selectedProduct.value && selectedProduct.value.titulo_small
      ? selectedProduct.value.titulo_small
      : "",
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

  if (!selectedProduct.value) {
    return false;
  }

  // TITULO_SMALL
  if (selectedProduct.value.titulo_small) {
    data.value.title = selectedProduct.value.titulo_small;
    productTitle.value = selectedProduct.value.titulo_small;
  }
  // PVD_ESTANDAR
  if (selectedProduct.value.pvd_estandar) {
    productPvdEstandar.value = selectedProduct.value.pvd_estandar;
  }

  data.value.title = productTitle.value;
});

function updateProductCardTitle(title) {
  productsItemsStore.setProductTitle(documentActionsStore.selectedCard, title);
}

function updatePrice(newVal) {
  if (!newVal || !selectedProduct.value) {
    return null;
  }

  if (selectedProduct.value.id) {
    let p = selectedProduct.value;
    if (newVal > p.pvd) {
      newVal = p.pvd;
    }
    p.pvd_estandar = newVal;
    productsItemsStore.editProduct(p.id, p);
  }
}

function updateOfferPrice(newVal) {
  if (!newVal && !selectedProduct.value) {
    return null;
  }

  if (selectedProduct.value.id) {
    let p = selectedProduct.value;
    if (p.oferta == 1) {
      if (newVal > p.pvd_estandar) {
        p.pvd = p.pvd_estandar;
      } else {
        p.pvd = newVal;
      }
    }
    productsItemsStore.editProduct(p.id, p);
  }
}
</script>

<template>
  <div id="container" class="flex flex-col w-full items-start">
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
    <NumberInput :numberValue="productPvdEstandar" :valueUpdate="updatePrice" />
    <h3>Oferta:</h3>
    <NumberInput
      v-if="selectedProduct && selectedProduct.oferta >= 1"
      :numberValue="productPvd"
      :valueUpdate="updateOfferPrice"
    />
    <p class="text-gray-500" v-else>Este producto no está en oferta</p>
  </div>
</template>