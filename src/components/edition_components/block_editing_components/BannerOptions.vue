<script setup>
import { ref, defineEmits, watch } from "vue";
import Slider from "./mini_components/Slider.vue";
import ColorPicker from "./mini_components/ColorPicker.vue";
import { useBannerVars } from "../../../store/BannerVars";
import closeIcon from "../../../assets/img/x.png";

const store = useBannerVars();

const url = ref(store.bannerUrl);

//cuando url cambie ejecuto emit
let timeoutId = null;
watch(url, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    store.setBannerUrl(newVal);
  }, 1000);
});
</script>

<template>
  <div class="blockEditItem">
    <h2>Banner</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Url de la imagen:</h3>
    <div class="flex items-center w-full">
      <input class="custom-input text-sm" placeholder="URL" v-model="url" />
      <button v-if="url" class="size-4 mx-2" @click="url = ''">
        <img :src="closeIcon" />
      </button>
      <div v-else class="size-4 mx-2"></div>
    </div>

    <!-- Slider -->
    <h3>Margen inferior:</h3>
    <Slider
      class="mb-4"
      :value="store.marginBottom"
      :valueUpdate="store.setMarginBottom"
    />

    <!-- Background -->
    <h3>Fondo:</h3>
    <ColorPicker
      class="mb-4 h-fit"
      :value="store.bannerColor"
      :valueUpdate="store.setBannerColor"
    />
  </div>
</template>

<style scoped>
</style>