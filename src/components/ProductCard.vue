<script setup>
import ProductModel from "../model/ProductModel";
import { defineProps } from "vue";

const props = defineProps({
  product: ProductModel,
  cardDirection: String,
});

const roundPvp = (pvp) => {
  const roundedPvp = Math.round(pvp * 100) / 100;
  const formattedPrice = roundedPvp.toFixed(2);
  return formattedPrice;
};

console.log(props.cardDirection)
</script>

<template>
  <div class="flex gap-2 border border-black" :class="cardDirection=='col'? 'flex-col':'flex-row'">
    <div class="border border-red-200">
      {{props.product.titulo}}
    </div>
    <div class="border border-y-teal-300">
      {{props.product.pvd}}
    </div>
  </div>
</template>

<style scoped></style>