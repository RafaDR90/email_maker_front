<script setup>
import { gridVars } from '../store/GridVars';
import ProductCard from './ProductCard.vue';
import { useProductVars } from '../store/ProductVars';

const productVarsStore = useProductVars();

const gridConfiguration = gridVars();

const updateStyle = () => {
    return {
        'grid-template-columns': `repeat(${gridConfiguration.selectedMode.columns}, 1fr)`
    };
}

const getDirection = (key) => {
if(gridConfiguration.selectedMode.childDistribution == 'normal'){
  return 'col'
}
if(key%2==0 && gridConfiguration.selectedMode.childDistribution[0]==1){
  return 'col'
}else if(key%2!=0 && gridConfiguration.selectedMode.childDistribution[1]==1){
  return 'col'
}else{
  return 'row'
}
}

</script>

<template>
    <div class="grid-container" :style="updateStyle()">
        <div v-for="(producto, key) in productVarsStore.productsList" class="w-full " :key="key" :style="gridConfiguration.selectedMode.childDistribution !== 'normal' ?
            (key % 2 === 0 ?
                { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}` } :
                { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}` }) :
            {}">
            <ProductCard :product="producto" :cardDirection="getDirection(key)" />
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    gap: 10px;
}
</style>