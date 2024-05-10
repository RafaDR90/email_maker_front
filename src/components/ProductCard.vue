<script setup>
import ProductModel from "../model/ProductModel";
import { defineProps } from "vue";

const props = defineProps({
  product: ProductModel,
});

const roundPvp = (pvp) => {
  const roundedPvp = Math.round(pvp * 100) / 100;
  const formattedPrice = roundedPvp.toFixed(2);
  return formattedPrice;
};
</script>

<template>
  <div class="selectable-block product-card-container">
    <div class="product-card">
      <!-- Si no hay producto -->
      <div v-if="!props.product" class="product-card-content">
        <img
          src="/src/assets/img/no-results.png"
          alt="No se ha encontrado el producto"
          class="size-[20%]"
        />
        <p class="mt-4">No se ha encontrado el producto</p>
      </div>
      <!-- Si hay producto -->
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