<script setup>
import FontSelector from "../block_editing_components/mini_components/FontSelector.vue";
import ColorPicker from "../block_editing_components/mini_components/ColorPicker.vue";
import { useEmailVars } from "../../../store/EmailVars";
import { underBannerTextVars } from "../../../store/UnderBannerText";
import { useBannerVars } from "../../../store/BannerVars";

const emailVarsStore = useEmailVars();
const bannerStore = useBannerVars();
const underBannerStore = underBannerTextVars();

function changeFont(font) {
  emailVarsStore.setGeneralFont(font);
  underBannerStore.setFont(font);
}

function changeBackgroundColor(color) {
  if (validateColor(color)) {
    emailVarsStore.setBgColor(color);
    underBannerStore.setBgColor(color);
    bannerStore.setBannerColor(color);
  }
}

function validateColor(color) {
  if (typeof color !== "string") {
    return false;
  }

  // Comprobar si la cadena es un color #RGB
  if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
    return false;
  }
  return true;
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
    <!-- General Background Color -->
    <h3>Color del fondo:</h3>
    <ColorPicker
      :value="emailVarsStore.bgColor"
      :valueUpdate="changeBackgroundColor"
    />
  </div>
</template>

<style scoped>
</style>