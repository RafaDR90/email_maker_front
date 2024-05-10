<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontEditer from "./block_editing_components/FontOptions.vue";

import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["update:fontSelected"]);

const props = defineProps({
  selectedBlock: String,
  underBannerSelectedFont: Object,
});

const fontSelectedUpdate = (newFont) => {
  emits("update:fontSelected", newFont);
};
</script>


<template>
  <div
    class="w-[25%] h-[calc(100vh-4rem)] bg-indigo-200 dark:bg-indigo-950  shadow-md z-20 overflow-auto"
  >
    <BannerOptions v-if="selectedBlock == 'banner'" />
    <FontEditer
      v-else-if="selectedBlock == 'underBannerText'"
      :underBannerSelectedFont="underBannerSelectedFont"
      @update:text="updateUnderBannerText"
      @update:fontSelected="fontSelectedUpdate"
    />
  </div>
</template>