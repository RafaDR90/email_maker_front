<script setup>
import { ref,defineEmits, watch } from "vue";
import Slider from "./mini_components/Slider.vue";
import ColorPicker from "./mini_components/ColorPicker.vue";


const props = defineProps({
  bannerMargin:Number,
});

const emits = defineEmits(["update:colors", "update:url","update:bannerMargin"]);

const url = ref("");
const backgroundColor = ref("#000000");

//cuando url cambie ejecuto emit
let timeoutId = null;
watch(url, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    emits("update:url", newVal);
  }, 1000);
});


const handleBgColorUpdate = (updatedColor) => {
  backgroundColor.value = updatedColor;
};

const bannerMarginUpdate=(newVal)=>{
  emits("update:bannerMargin", newVal);
}
</script>

<template>
  <div class="size-full flex flex-col place-items-start p-4">
    <h2 class="font-bold">Banner</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Url de la imagen:</h3>
    <input class="custom-input text-sm mb-4" placeholder="URL" v-model="url" />

    <!-- Slider -->
    <h3>Margen inferior:</h3>
    <Slider class="mb-4 " :bannerMargin="bannerMargin" @update:bannerMargin="bannerMarginUpdate" />

    <!-- Background -->
    <h3>Fondo:</h3>
    <ColorPicker
      :colors="[backgroundColor]"
      @update:colors="handleBgColorUpdate"
      class="mb-4"
    />
  </div>
</template>

<style scoped>

.divider {
  @apply bg-slate-600 w-[91%] min-w-7 h-[1px] opacity-75 z-0;
}
</style>