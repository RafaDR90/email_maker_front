<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontEditer from "./block_editing_components/FontOptions.vue";

import { defineEmits, defineProps } from "vue";

const emits = defineEmits([
  "update:fontWeight",
  "update:fontSize",
  "update:textHeight",
  "update:fontSelected",
]);

const props = defineProps({
  selectedBlock: String,
  underBannerTextHeight: Number,
  underBannerSelectedFont: Object,
  underBannerTextFontSize: Number,
  underBannerTextFontWeight: Number,
});



const fontWeightUpdate = (newWeight) => {
  emits("update:fontWeight", newWeight);
};
const fontSizeUpdate = (newSize) => {
  emits("update:fontSize", newSize);
};
const textHeightUpdate = (newSize) => {
  emits("update:textHeight", newSize);
};
const fontSelectedUpdate = (newFont) => {
  emits("update:fontSelected", newFont);
};


</script>


<template>
  <div class="w-[25%] bg-indigo-200 dark:bg-indigo-950 h-[calc(100vh-4rem)]">
    <BannerOptions
      v-if="selectedBlock == 'banner'"
    />
    <FontEditer
      v-else-if="selectedBlock == 'underBannerText'"
      :underBannerTextHeight="underBannerTextHeight"
      :underBannerSelectedFont="underBannerSelectedFont"
      :underBannerTextFontSize="underBannerTextFontSize"
      :underBannerTextFontWeight="underBannerTextFontWeight"
      @update:text="updateUnderBannerText"
      @update:fontWeight="fontWeightUpdate"
      @update:fontSize="fontSizeUpdate"
      @update:textHeight="textHeightUpdate"
      @update:fontSelected="fontSelectedUpdate"
    />
  </div>
</template>