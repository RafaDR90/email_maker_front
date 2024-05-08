<script setup>
import { ref,defineEmits, watch } from "vue";
import Slider from "./mini_components/Slider.vue";
import ColorPicker from "./mini_components/ColorPicker.vue";


const props = defineProps({
  bannerMargin:Number,
});

const emits = defineEmits(["update:colors", "update:url","update:bannerMargin"]);

const url = ref("");
const backgroundColor = ref("#FFFFFF");

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
  <div class="blockEditItem">
    <h2>Banner</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Url de la imagen:</h3>
    <input class="custom-input text-sm mb-4" placeholder="URL" v-model="url" />

    <!-- Slider -->
    <h3>Margen inferior:</h3>
    <Slider class="mb-4 " :value="bannerMargin" @update:value="bannerMarginUpdate" :step="1"/>

    <!-- Background -->
    <h3>Fondo:</h3>
    <ColorPicker
      :colors="[backgroundColor]"
      @update:colors="handleBgColorUpdate"
      class="mb-4 h-fit"
    />
  </div>
</template>

<style scoped>

</style>