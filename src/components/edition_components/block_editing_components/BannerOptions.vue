<script setup>
import { ref, watch, defineProps } from "vue";
import Slider from "./mini_components/Slider.vue";
import ColorPicker from "./mini_components/ColorPicker.vue";
import closeIcon from "../../../assets/img/x.png";

const props = defineProps({
  title: { type: String, default: "Edición" },
  bannerUrl: { type: String, default: "" },
  bannerImgUrl: { type: String, default: "" },
  bannerColor: { type: String, default: "#FFFFFF" },
  marginBottom: { type: Number, default: 0 },
  setBannerUrl: { type: Function, default: () => {} },
  setBannerImgUrl: { type: Function, default: () => {} },
  setBannerColor: { type: Function, default: () => {} },
  setMarginBottomBanner: { type: Function, default: () => {} },
});

const url = ref(props.bannerUrl);
const imgUrl = ref(props.bannerImgUrl);
const color = ref(props.bannerColor);
const marginBottom = ref(props.marginBottom);

let timeoutId = null;
watch(url, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.setBannerUrl(newVal);
  }, 1000);
});

watch(imgUrl, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.setBannerImgUrl(newVal);
  }, 1000);
});

watch(color, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.setBannerColor(newVal);
  }, 1000);
});

watch(marginBottom, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.setMarginBottomBanner(newVal);
  }, 1000);
});
</script>

<template>
  <div class="blockEditItem">
    <h2>{{props.title}}</h2>
    <div class="divider" />
    <!-- URL -->
    <h3>Url de redireccionamiento:</h3>
    <div class="flex items-center w-full">
      <input class="custom-input text-sm" placeholder="URL" v-model="url" />
      <button v-if="url" class="size-4 mx-2" @click="url = ''">
        <img :src="closeIcon" />
      </button>
      <div v-else class="size-4 mx-2"></div>
    </div>
    <!-- Img URL -->
    <h3>Url de la imagen:</h3>
    <div class="flex items-center w-full">
      <input class="custom-input text-sm" placeholder="URL" v-model="imgUrl" />
      <button v-if="imgUrl" class="size-4 mx-2" @click="imgUrl = ''">
        <img :src="closeIcon" />
      </button>
      <div v-else class="size-4 mx-2"></div>
    </div>

    <!-- Slider -->
    <h3>Margen inferior:</h3>
    <Slider
      class="mb-4"
      :value="marginBottom"
      :valueUpdate="props.setMarginBottomBanner"
    />

    <!-- Background -->
    <h3>Fondo:</h3>
    <ColorPicker
      class="mb-4 h-fit"
      :value="bannerColor"
      :valueUpdate="props.setBannerColor"
    />
  </div>
</template>