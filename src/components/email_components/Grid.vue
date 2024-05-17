<script setup>
import { gridVars } from "../../store/GridVars";
import { cardStyle } from "../../store/CardStyle";
import ProductCard from "../product_card/ProductCard.vue";
import Banner from "../../assets/img/boton-agregar.png";
import { productItems } from "../../store/ProductsItems";
import { documentActions } from "../../store/DocumentActions";
import { watch, ref } from "vue";

const documentActionsStore = documentActions();
const cardStyleStore = cardStyle();
const productItemsStore = productItems();
const gridConfiguration = gridVars();

const productsDiv = ref(null);
const products = ref(productItemsStore.productsList);

const updateStyle = () => {
  return {
    "grid-template-columns": `repeat(${gridConfiguration.selectedMode.columns}, 1fr)`,
  };
};

const getDirection = (key) => {
  if (gridConfiguration.selectedMode.childDistribution == "normal") {
    if (gridConfiguration.selectedMode.columns === 1) {
      cardStyleStore.setCardHeight(380);
      return "row";
    } else {
      cardStyleStore.setCardHeight(460);
      return "col";
    }
  } else {
    cardStyleStore.setCardHeight(460);
  }
  if (
    key % 2 == 0 &&
    gridConfiguration.selectedMode.childDistribution[0] == 1
  ) {
    return "col";
  } else if (
    key % 2 != 0 &&
    gridConfiguration.selectedMode.childDistribution[1] == 1
  ) {
    return "col";
  } else {
    return "col";
  }
};

const getDistribution = (key) => {
  if (key % 2 != 0 && gridConfiguration.selectedMode.columns === 1) {
    return "row-reverse";
  } else {
    return "row";
  }
};

const addProductsToArray = () => {
  productItemsStore.addProduct();
  updateSelectedCard(productItemsStore.getLastProduct().id);
};

const updateSelectedCard = (id) => {
  documentActionsStore.updateSelectedCard(id);
  documentActionsStore.updateSelectedBlock("card");
};

watch(documentActionsStore, () => {
  if (documentActionsStore.creatingSvg) {
    products.value = productItemsStore.defaultProductList;
  } else {
    products.value = productItemsStore.productsList;
  }
});
</script>

<template>
  <div :style="updateStyle()" style="display: grid; row-gap: 5px">
    <button
      v-if="!documentActionsStore.creatingSvg"
      class="selectable-block"
      v-for="(producto, key) in productItemsStore.productsList"
      :key="key"
      ref="productsDiv"
      :style="
        gridConfiguration.selectedMode.childDistribution !== 'normal'
          ? key % 2 === 0
            ? {
                'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}`,
              }
            : {
                'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}`,
              }
          : {}
      "
      style="
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        background-color: transparent;
      "
    >
      <ProductCard
        @click="updateSelectedCard(producto.id)"
        :product="producto"
        :cardDirection="getDirection(key)"
        :cardInverted="getDistribution(key)"
        :cardDescription="gridConfiguration.selectedMode.columns === 1 || false"
      />
    </button>
    <button
      v-else
      class="selectable-block"
      v-for="(producto, keyy) in productItemsStore.defaultProductList"
      :key="keyy"
      ref="productsDiv"
      :style="
        gridConfiguration.selectedMode.childDistribution !== 'normal'
          ? keyy % 2 === 0
            ? {
                'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}`,
              }
            : {
                'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}`,
              }
          : {}
      "
      style="
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        background-color: transparent;
      "
    >
      <ProductCard
        @click="updateSelectedCard(producto.id)"
        :product="producto"
        :cardDirection="getDirection(key)"
      />
    </button>
    <div
      v-if="
        documentActionsStore.addProductModal &&
        !documentActionsStore.creatingSvg
      "
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 11rem;
      "
    >
      <div
        class="selectable-block"
        @click="addProductsToArray"
        style="
          width: 90%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #d1d5db;
        "
      >
        <button
          style="
            width: max-content;
            height: max-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="width: 100%; text-align: center">Añade producto</p>
          <img :src="Banner" alt="banner" style="width: 5rem; height: 5rem" />
        </button>
      </div>
    </div>
  </div>
</template>
