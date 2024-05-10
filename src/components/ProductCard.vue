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
  <div
    class="flex gap-2 border border-black"
    :class="cardDirection == 'col' ? 'flex-col' : 'flex-row'"
  >
    <div v-if="props.product">
      <div class="border border-red-200">
        {{ props.product.titulo }}
      </div>
      <div class="border border-y-teal-300">
        {{ props.product.pvd }}
      </div>
    </div>
    <div v-else class="product-card-content">
      <img
        :src="product.url_imagen_compress"
        alt="Imagen del producto"
        class="object-contain h-[60%] w-auto"
      />
      <p class="font-bold text-xs overflow-y-hidden line-clamp-2">
        {{ product.titulo }}
      </p>
      <p>{{ roundPvp(product.pvp) }}€</p>

      <p v-if="product.oferta > 0">
        {{ product.oferta }}
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  @apply text-sm py-1;
}
.product-card-container {
  @apply size-full h-60 bg-slate-200 rounded-md z-10 shadow-indigo-950 shadow-sm flex justify-center items-center;
}
.product-card {
  @apply flex content-center items-center justify-center bg-indigo-300 rounded-md w-[90%] h-[93%] px-3 py-1;
}
.product-card-content {
  @apply size-full flex flex-col place-items-center justify-center place-content-center;
}
</style>