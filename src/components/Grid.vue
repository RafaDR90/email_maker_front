<script setup>
import { gridVars } from '../store/GridVars';
import ProductCard from './ProductCard.vue';
import { useProductVars } from '../store/ProductVars';
import Banner from "../assets/img/boton-agregar.png";
import { productItems } from '../store/ProductsItems';
import { documentActions } from '../store/DocumentActions';

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
const addProductsToArray = () => {
  productItemsStore.addProduct()
  console.log(productItemsStore.productsList)
}

const updateSelectedCard = (id) => {
  documentActionsStore.updateSelectedCard(id)
  documentActionsStore.updateSelectedBlock('card')
}

</script>

<template>
  <div class="grid-container" :style="updateStyle()">
    <button v-for="(producto, key) in productItemsStore.productsList" class="w-full " :style="gridConfiguration.selectedMode.childDistribution !== 'normal' ?
      (key % 2 === 0 ?
        { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}` } :
        { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}` }) :
      {}">
      <ProductCard @click="updateSelectedCard(producto.id)" :product="producto" :cardDirection="getDirection(key)" />
    </button>
    <div class=" w-full flex justify-center items-center h-44">
      <div class="w-[90%] h-[90%] border-gray-600 bg-gray-300 flex justify-center items-center">
        <button @click="addProductsToArray" class=" w-max h-max flex flex-col justify-center items-center">
          <p class=" w-full text-center">Añade producto</p>
          <img :src="Banner" alt="" class="w-20 h-20">
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 10px;
}
</style>