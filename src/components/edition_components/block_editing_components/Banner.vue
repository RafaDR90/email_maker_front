<script setup>
import { ref } from "vue";
import Slider from "./Slider.vue";
import ColorPicker from "./ColorPicker.vue";

const url = ref("");
</script>

<template>
  <div class="size-full flex flex-col place-items-center p-4">
    <h2 class="font-bold">Banner</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Url de la imagen:</h3>
    <input class="custom-input text-sm" v-model="url" />

    <!-- Slider -->
    <h3>Margen inferior:</h3>
    <Slider />

    <!-- Background -->
    <h3>Fondo:</h3>
    <ColorPicker/>
  </div>
</template>

<style scoped>
h3 {
  @apply mt-4 mb-2 self-start text-sm font-semibold;
}
.divider {
  @apply bg-slate-400 w-[91%] min-w-7 h-[1px] opacity-75 z-0;
}
</style>