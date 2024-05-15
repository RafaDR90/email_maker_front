<script setup>
import { defineProps } from "vue";
import addBannerImg from "../../../../assets/img/boton-agregar.png";

const props = defineProps({
  bannerImageUrl: { type: String, default: "" },
  bannerBackgroundColor: { type: String, default: "#FFFFFF" },
  bannerBottomMargin: { type: Number, default: 0 },
});
/**
 * Función para comprobar si la imagen es una URL
 */
function isURL(newUrl) {
  try {
    const url = new URL(newUrl);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
}

/**
 * Función para comprobar si la imagen es válida.
 */
function isImageValid(imageURL) {
  if (!isURL(imageURL)) {
    return false;
  }
  const img = new Image();
  img.src = imageURL;

  return img.complete && img.naturalWidth !== 0;
}
</script>

<template>
  <div
    v-if="!props.bannerImageUrl"
    :style="{
      backgroundColor: bannerBackgroundColor || '',
      paddingBottom: bannerBottomMargin + 'px',
    }"
    style="
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <img
        style="width: 5rem; height: 5rem"
        :src="addBannerImg"
        alt="imagen banner"
      />

      <p style="font-size: 2.25rem; color: #6b7280">Inserte imagen</p>
    </div>
  </div>
  <div
    v-else
    :style="{
      backgroundColor: bannerBackgroundColor,
      paddingBottom: bannerBottomMargin + 'px',
    }"
  >
    <img
      v-if=" isImageValid(props.bannerImageUrl)"
      style="width: 100%"
      :src="props.bannerImageUrl"
      alt="imagen banner"
    />
    <div
      v-else
      style="width: 100%; padding: 20px; background-color: lightcoral"
      align="center"
    >
      <p style="color: darkred; font-weight: bold">¡Imagen no encontrada!</p>
    </div>
  </div>
</template>