<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";
import { useBannerVars } from "../../../../store/BannerVars";

const store = useBannerVars();

const selectedColor = ref(store.bannerColor);


let timeoutId = null;
const updateColor = (newColor) => {
  selectedColor.value = newColor;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    store.setBannerColor(newColor);
  }, 1000);
};

</script>

<template>
  <div id="colorPicker">
    <div
      :key="index"
      class="flex place-content-center place-items-center"
    >
      <input
        type="color"
        :value="selectedColor"
        class="h-12 bg-transparent mx-1 w-20 "
        @input="updateColor($event.target.value)"
      />
      <input
        type="text"
        :value="selectedColor"
        class="custom-input h-10 min-w-[5.5rem] max-w-28"
        @input="updateColor($event.target.value)"
      />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>