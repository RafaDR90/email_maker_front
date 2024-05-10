<script setup>
import FontSelector from "../block_editing_components/mini_components/FontSelector.vue";
import { underBannerTextVars } from "../../../store/UnderBannerText";

const underBannerTextStore = underBannerTextVars();
</script>

<template>
  <div class="my-4 flex flex-col content-center">
    <h2>Opciones generales del email</h2>
    <div class="divider" />
    <!-- Font selector -->
    <h3 class="mt-0">Fuente:</h3>
    <FontSelector
      :fontsList="underBannerTextStore.fonts"
      :selectedFont="underBannerTextStore.font"
      :updateFont="underBannerTextStore.setFont"
    />
  </div>
</template>

<style scoped>
</style>