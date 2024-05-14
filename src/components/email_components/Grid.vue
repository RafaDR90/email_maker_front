<script setup>
import { gridVars } from '../../store/GridVars';
import ProductCard from '../ProductCard.vue';
import { useProductVars } from '../../store/ProductVars';
import Banner from "../../assets/img/boton-agregar.png";
import { productItems } from '../../store/ProductsItems';
import { documentActions } from '../../store/DocumentActions';
import { watch, ref } from 'vue';

const documentActionsStore = documentActions();

const productItemsStore = productItems();
const productVarsStore = useProductVars();


const gridConfiguration = gridVars();

const updateStyle = () => {
  return {
    'grid-template-columns': `repeat(${gridConfiguration.selectedMode.columns}, 1fr)`
  };
}

const getDirection = (key) => {
  if (gridConfiguration.selectedMode.childDistribution == 'normal') {
    return 'col'
  }
  if (key % 2 == 0 && gridConfiguration.selectedMode.childDistribution[0] == 1) {
    return 'col'
  } else if (key % 2 != 0 && gridConfiguration.selectedMode.childDistribution[1] == 1) {
    return 'col'
  } else {
    return 'row'
  }
}

const productsDiv = ref(null);

const addProductsToArray = () => {
  productItemsStore.addProduct()
}

const updateSelectedCard = (id) => {
  documentActionsStore.updateSelectedCard(id)
  documentActionsStore.updateSelectedBlock('card')
}


</script>

<template>
  <div :style="updateStyle()" style="display: grid;">
    <button v-for="(producto, key) in productItemsStore.productsList" :key="key" ref="productsDiv" :style="gridConfiguration.selectedMode.childDistribution !== 'normal' ?
      (key % 2 === 0 ?
        { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}` } :
        { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}` }) :
      {}"
      style="width: 95%; margin-left: auto; margin-right: auto;  ">
      <ProductCard @click="updateSelectedCard(producto.id)"  :product="producto" :cardDirection="getDirection(key)" />
    </button>
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;  height: 11rem;">
      <div style="width: 90%; height: 90%; display: flex; justify-content: center; align-items: center; border-color: #4B5563; background-color: #D1D5DB;">
        <button @click="addProductsToArray" style="width: max-content; height: max-content; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <p style="width: 100%; text-align: center;">Añade producto</p>
          <img :src="Banner" alt="banner" style="width: 5rem; height: 5rem;">
        </button>
      </div>
    </div>
  </div>
</template>
