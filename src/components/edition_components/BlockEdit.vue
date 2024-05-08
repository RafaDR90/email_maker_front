<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontEditer from "./block_editing_components/FontOptions.vue";

import { defineEmits } from "vue";

const emits = defineEmits(["update:bannerUrl","update:bannerMargin"]);

const props = defineProps({
  selectedBlock: String,
  bannerUrl: String,
  bannerMargin: Number,
});

const handleUrlUpdate = (newUrl) => {
  emits("update:bannerUrl", newUrl);
};

const bannerMarginUpdate = (newMargin) => {
  emits("update:bannerMargin", newMargin);
};
</script>


<template>
  <div class="w-[25%] bg-indigo-200 dark:bg-indigo-950 h-[calc(100vh-4rem)]">
    <BannerOptions v-if="selectedBlock==''" :bannerUrl="bannerUrl" @update:url="handleUrlUpdate" :bannerMargin="bannerMargin" @update:bannerMargin="bannerMarginUpdate" />
    <FontEditer v-else-if="selectedBlock=='underBannerText'"/>
  </div>
</template>