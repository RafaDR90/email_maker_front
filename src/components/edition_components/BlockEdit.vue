<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontEditer from "./block_editing_components/FontOptions.vue";

import { defineEmits } from "vue";

const emits = defineEmits(["update:bannerUrl"]);

const props = defineProps({
  bannerUrl: String,
});

const handleUrlUpdate = (newUrl) => {
  emits("update:bannerUrl", newUrl);
};
</script>


<template>
  <div class="w-[25%] bg-indigo-100 dark:bg-indigo-950 flex flex-col overflow-y-auto">
    <BannerOptions :bannerUrl="bannerUrl" @update:url="handleUrlUpdate" />
    <FontEditer/>
  </div>
</template>