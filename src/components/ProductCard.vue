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

</script>

<template>
  <div class="flex gap-2 border border-black" :class="cardDirection == 'col' ? 'flex-col' : 'flex-row'">
    <div class="border border-red-200">
      <img style="width: 200px ;" :src="props.product.url_imagen_compress" alt="Imagen del producto">
    </div>
    <div class="border border-y-teal-300">
      <p class=" text-xl font-bold">{{ props.product.titulo_small }}</p>
      <div v-if="props.product.oferta" class="flex justify-center items-center">
        <p class="p-2 text-white bg-red-600 w-min mx-5">¡OFERTA!</p>
      </div>
      <div>
        <div class="flex justify-around mt-4">
          <p v-if="props.product.oferta" class="text-3xl text-blue-700 font-bold">{{ props.product.pvd }}</p>
          <p :class="props.product.oferta ? ' text-gray-500 line-through' : ' text-blue-700'"
            class=" text-3xl font-bold">
            {{ props.product.pvd_estandar }}</p>
        </div>
        <div>
          <div class="flex justify-center">
            <p class=" bg-red-600 p-3 px-8 text-white m-3 w-min">Comprar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>