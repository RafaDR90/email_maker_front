<script setup>
import EmailSubjectOptions from "./block_editing_components/EmailSubjectOptions.vue";
import BannerOptions from "./block_editing_components/BannerOptions.vue";
import FontOptions from "./block_editing_components/UnderBannerOptions.vue";
import ProductCardOptions from "./block_editing_components/ProductCardOptions.vue";
import NotSelectedOptions from "./block_editing_components/NotSelectedOptions.vue";
import { documentActions } from "../../store/DocumentActions";
import { useBannerVars } from "../../store/BannerVars";

const bannerVarsStore = useBannerVars();

import { defineEmits, defineProps } from "vue";

const documentActionsStore = documentActions();

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
    class="w-[25%] h-[calc(100vh-4rem)] bg-indigo-100 dark:bg-indigo-950 shadow-md z-20 overflow-auto p-4"
  >
    <EmailSubjectOptions
      v-if="documentActionsStore.selectedBlock == 'emailSubject'"
    />
    <BannerOptions
      v-else-if="documentActionsStore.selectedBlock == 'banner'"
      :title="'Banner superior'"
      :bannerUrl="bannerVarsStore.topBannerUrl"
      :bannerImgUrl="bannerVarsStore.topImgBannerUrl"
      :bannerColor="bannerVarsStore.bannerColor"
      :marginBottom="bannerVarsStore.marginBottom"
      :setBannerUrl="bannerVarsStore.setTopBannerUrl"
      :setBannerImgUrl="bannerVarsStore.setTopImgBannerUrl"
      :setBannerColor="bannerVarsStore.setBannerColor"
      :setMarginBottomBanner="bannerVarsStore.setMarginBottom"
    />
    <BannerOptions
      v-else-if="documentActionsStore.selectedBlock == 'bottomBanner'"
      :title="'Banner inferior'"
      :bannerUrl="bannerVarsStore.bottomBannerUrl"
      :bannerImgUrl="bannerVarsStore.bottomImgBannerUrl"
      :bannerColor="bannerVarsStore.bottomBannerColor"
      :marginBottom="bannerVarsStore.bottomBannerMarginBottom"
      :setBannerUrl="bannerVarsStore.setBottomBannerUrl"
      :setBannerImgUrl="bannerVarsStore.setBottomImgBannerUrl"
      :setBannerColor="bannerVarsStore.setBottomBannerColor"
      :setMarginBottomBanner="bannerVarsStore.setBottomBannerMarginBottom"
    />
    <FontOptions
      v-else-if="documentActionsStore.selectedBlock == 'underBannerText'"
      :underBannerSelectedFont="underBannerSelectedFont"
      @update:fontSelected="fontSelectedUpdate"
    />
    <ProductCardOptions
      v-else-if="documentActionsStore.selectedBlock == 'card'"
    />
    <NotSelectedOptions
      v-else-if="documentActionsStore.selectedBlock == null"
    />
  </div>
</template>