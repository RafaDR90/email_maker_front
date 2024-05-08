<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontEditer from "./block_editing_components/FontOptions.vue";

import { defineEmits, defineProps } from "vue";

const emits = defineEmits([
  "update:bannerUrl",
  "update:bannerMargin",
  "update:fontWeight",
  "update:fontSize",
  "update:textHeight",
  "update:bannerBgColor",
  "update:underBannerText",
  "update:fontSelected",
]);

const props = defineProps({
  selectedBlock: String,
  bannerUrl: String,
  bannerMargin: Number,
  underBannerText: String,
  underBannerTextHeight: Number,
  underBannerSelectedFont: Object,
  underBannerTextFontSize: Number,
  underBannerTextFontWeight: Number,
});

const handleUrlUpdate = (newUrl) => {
  emits("update:bannerUrl", newUrl);
};

const bannerMarginUpdate = (newMargin) => {
  emits("update:bannerMargin", newMargin);
};

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

const updateBackgroundColor = (newColor) => {
  emits("update:bannerBgColor", newColor);
};
const updateUnderBannerText = (newText) => {
  emits("update:underBannerText", newText);
};
</script>


<template>
  <div class="w-[25%] bg-indigo-200 dark:bg-indigo-950 h-[calc(100vh-4rem)]">
    <BannerOptions
      v-if="selectedBlock == 'banner'"
      :bannerUrl="bannerUrl"
      @update:url="handleUrlUpdate"
      :bannerMargin="bannerMargin"
      @update:bannerMargin="bannerMarginUpdate"
      @update:colors="updateBackgroundColor"
    />
    <FontEditer
      v-else-if="selectedBlock == 'underBannerText'"
      :underBannerText="underBannerText"
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