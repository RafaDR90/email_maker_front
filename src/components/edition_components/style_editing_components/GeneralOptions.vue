<script setup>
import FontSelector from "../block_editing_components/mini_components/FontSelector.vue";
import { emailVars } from "../../../store/EmailVars";
import { underBannerTextVars } from "../../../store/UnderBannerText";

const emailVarsStore = emailVars();
const underBannerStore = underBannerTextVars();

function changeFont(font) {
  emailVarsStore.setGeneralFont(font);
  underBannerStore.setFont(font);
}
</script>

<template>
  <div class="my-4 flex flex-col content-center">
    <h2>Opciones generales del email</h2>
    <div class="divider" />
    <!-- Font selector -->
    <h3 class="mt-0">Fuente:</h3>
    <FontSelector
      :fontsList="emailVarsStore.fonts"
      :selectedFont="emailVarsStore.generalFont"
      :updateFont="changeFont"
    />
  </div>
</template>

<style scoped>
</style>