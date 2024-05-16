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
const productPvdEstandar = ref(10);
const productPvd = ref(selectedProduct.pvd || 0);

watch(documentActionsStore, () => {
  selectedProduct.value =
    productsItemsStore.productsList[documentActionsStore.selectedCard];
});

const setProduct = (product) => {
  productsItemsStore.editProduct(documentActionsStore.selectedCard, product);
  selectedProduct.value = product;
  productPvdEstandar.value = selectedProduct.value.pvd_estandar;
};

const data = ref({
  title:
    selectedProduct.value && selectedProduct.value.titulo_small
      ? selectedProduct.value.titulo_small
      : "",
  placeholder: "Introduce texto",
});




function updateProductCardTitle(title) {
  productsItemsStore.setProductTitle(documentActionsStore.selectedCard, title);
}

function updatePrice(newVal) {
  if (!newVal || !selectedProduct.value) {
    return null;
  }

  if (selectedProduct.value.id || selectedProduct.value.id >= 0) {
    let p = selectedProduct.value;
    p.pvd_estandar = newVal.toString();
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
      if (newVal > p.pvd) {
        newVal = p.pvd;
      }
      p.pvd = newVal.toString();
    }
    productsItemsStore.editProduct(p.id, p);
  }
}

const reference = ref(null);
watch(selectedProduct, () => {
  reference.value = selectedProduct.value.referencia;
  productPvdEstandar.value = selectedProduct.value.pvd_estandar;
  productPvd.value = selectedProduct.value.pvd;
  productTitle.value = selectedProduct.value.titulo_small;
});


</script>

<template>
  <div id="container" class="flex flex-col w-full items-start">
    <h2>Producto {{ documentActionsStore.selectedCard + 1 }}</h2>
    <div class="divider" />
    <AutocompleteForm :value="reference" :foundProducts="foundProductsRef" @search="searchProducts"
      @exportResult="setProduct" />
    <h3>Url de la imagen:</h3>
    <h3>Título:</h3>
    <RegularInput :text="productTitle" :placeholder="'Inserte título'" :onChange="updateProductCardTitle" />
    <h3>Precio:</h3>
    <NumberInput :value="productPvdEstandar" :valueUpdate="updatePrice" />
    <h3>Oferta:</h3>
    <NumberInput v-if="selectedProduct && selectedProduct.oferta >= 1" :value="productPvd"
      :valueUpdate="updateOfferPrice" />
    <p class="text-gray-500" v-else>Este producto no está en oferta</p>
    <h3>Url del boton:</h3>
  </div>
</template>