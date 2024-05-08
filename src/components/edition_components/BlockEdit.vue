<script setup>
import BannerOptions from "./block_editing_components/BannerOptions.vue";
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
  <div class="w-[25%] bg-indigo-200 dark:bg-indigo-950">
    <BannerOptions :bannerUrl="bannerUrl" @update:url="handleUrlUpdate" />
  </div>
</template>