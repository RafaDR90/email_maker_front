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
const reference = ref(null);
const urlImagen = ref(null);
const urlButton = ref(null);

watch(documentActionsStore, () => {
  selectedProduct.value =
    productsItemsStore.productsList[documentActionsStore.selectedCard];
});

const setProduct = (product) => {
  productsItemsStore.editProduct(documentActionsStore.selectedCard, product);
  selectedProduct.value = product;
  productPvdEstandar.value = selectedProduct.value.pvd_estandar;
};

function updateProductCardTitle(title) {
  productsItemsStore.setProductTitle(documentActionsStore.selectedCard, title);
}

function updatePrice(newVal) {
  if (!newVal || !selectedProduct.value) {
    return null;
  }

  if (selectedProduct.value.id) {
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
      if (newVal > p.pvd_estandar) {
        p.pvd = p.pvd_estandar;
      } else {
        p.pvd = newVal;
      }
    }
    productsItemsStore.editProduct(p.id, p);
  }
}

function updateProductCardImg(img) {
  productsItemsStore.setProductImgUrl(documentActionsStore.selectedCard, img);
}

function updateProductUrlButton(url) {
  productsItemsStore.setProductButtonUrl(
    documentActionsStore.selectedCard,
    url
  );
}

watch(selectedProduct, () => {
  reference.value = selectedProduct.value.referencia;
  productPvdEstandar.value = selectedProduct.value.pvd_estandar;
  productPvd.value = selectedProduct.value.pvd;
  productTitle.value = selectedProduct.value.titulo_small;
  urlImagen.value = selectedProduct.value.url_imagen_compress;
  urlButton.value = selectedProduct.value.url_product;
});

function deleteProductCard() {
  productsItemsStore.removeProductById(documentActionsStore.selectedCard);
  documentActionsStore.updateSelectedBlock(null);
}
</script>

<template>
  <div
    id="container"
    class="flex flex-col h-full w-full items-start justify-between"
  >
    <div class="w-full">
      <h2 class="text-center">
        Producto {{ documentActionsStore.selectedCard + 1 }}
      </h2>
      <div class="divider" />
      <AutocompleteForm
        :value="reference"
        :foundProducts="foundProductsRef"
        @search="searchProducts"
        @exportResult="setProduct"
      />
      <h3>Url de la imagen:</h3>
      <RegularInput
        :text="urlImagen"
        :placeholder="'Inserte URL de la imagen'"
        :onChange="updateProductCardImg"
      />
      <h3>Título:</h3>
      <RegularInput
        :text="productTitle"
        :placeholder="'Inserte título'"
        :onChange="updateProductCardTitle"
      />
      <h3>Precio:</h3>
      <NumberInput :value="productPvdEstandar" :valueUpdate="updatePrice" />
      <h3>Oferta:</h3>
      <NumberInput
        v-if="selectedProduct && selectedProduct.oferta >= 1"
        :value="productPvd"
        :valueUpdate="updateOfferPrice"
      />
      <p class="text-gray-500" v-else>Este producto no está en oferta</p>
      <h3>Url del boton:</h3>
      <RegularInput
        :text="urlButton"
        :placeholder="'URL de redireccionamiento del boton'"
        :onChange="updateProductUrlButton"
      />
    </div>
    <div class="w-full flex justify-center self-end content-end items-end mb-3">
      <button
        class="button bg-red-600 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        @click="deleteProductCard"
      >
        Quitar producto
      </button>
    </div>
  </div>
</template>

<style scoped>
.button {
  @apply px-4 py-2 text-slate-50 shadow-md focus:ring-opacity-50 transition duration-150 ease-in-out me-3 ms-3;
}
</style>