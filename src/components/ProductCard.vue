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
  <div   style="display: flex; gap: 0.5rem; height: 460px; border: 1px solid #000000;" :style="cardDirection=='col' ? 'flex-direction: column' : 'flex-direction: row'">
    <div class=" flex justify-center h-[200px] relative">
      <div v-if="props.product.oferta" class="flex  items-center absolute w-full">
        <p class="p-2 text-white text-xl bg-red-600 font-bold rounded w-min mx-5 mt-1">¡OFERTA!</p>
      </div>
      <img :src="props.product.url_imagen_compress" alt="Imagen del producto" class="h-full">
    </div>
    <div class="h-[300px] flex flex-col">
      <div class="flex justify-center h-[60px] items-center ">
        <p class=" text-xl font-bold">{{ props.product.titulo_small }}</p>
      </div>

      <div class="mt-auto flex flex-col gap-3 ">
        <div class="flex flex-col gap-3 justify-around mt-4 ">
          <p v-if="props.product.oferta" class="text-3xl text-blue-700 font-bold mx-6">{{ roundPvp(props.product.pvd) }}</p>
          <p :class="props.product.oferta ? ' text-gray-500 line-through' : ' text-blue-700'"
            class=" text-3xl font-bold mx-6">
            {{ roundPvp(props.product.pvd_estandar) }}</p>
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