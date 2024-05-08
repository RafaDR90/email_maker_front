<script setup>
import BlockEdit from "./edition_components/BlockEdit.vue";
import StyleEdit from "./edition_components/StyleEdit.vue";
import EmailPreview from "./edition_components/EmailPreview.vue";
import { ref, watch } from "vue";

/*----------------------------
            BLOCK EDIT
----------------------------*/
const selectedBlock = ref("banner");
const updateSelectedBlock = (block) => {
  selectedBlock.value = block;
};

/*----------------------------
            BANNER
----------------------------*/
const banner = ref("");
const bannerMargin = ref(0);
const bannerBackground = ref("#ffffff");

const updateBannerUrl = (newUrl) => {
  banner.value = newUrl;
};

const bannerMarginUpdate = (newMargin) => {
  bannerMargin.value = newMargin;
};

const updateBannerBgColor = (newColor) => {
    bannerBackground.value = newColor;
};
const underBannerTextFontWeightUpdate = (newWeight) => {
  console.log("NewEmail: ", newWeight);
  underBannerTextFontWeight.value = newWeight;
};

/*----------------------------
            FIN BANNER
----------------------------*/

/*----------------------------
            TEXTO
----------------------------*/
const underBannerText = ref("Hola mundo");
const underBannerTextHeight = ref(43);
const underBannerTextFontSize = ref(16);
const underBannerTextFontWeight = ref(400);
/*----------------------------
           FIN TEXTO
----------------------------*/

/*----------------------------
         CARDS GRID
----------------------------*/
const gridColums = ref("3");
/*----------------------------
       FIN CARDS GRID
----------------------------*/
</script>

<template>
  <div class="w-full min-h-full flex">
    <StyleEdit />
    <EmailPreview
      :key="gridColums"
      @update:selectedBlock="updateSelectedBlock"
      :selectedBlock="selectedBlock"
      :selectedBanner="banner"
      :bannerMargin="Number(bannerMargin)"
      :underBannerText="underBannerText"
      :bannerBackground="bannerBackground"
      :underBannerTextHeight="underBannerTextHeight"
      :underBannerTextFontSize="underBannerTextFontSize"
      :underBannerTextFontWeight="underBannerTextFontWeight"
      :gridColums="gridColums"
    />
    <BlockEdit
      :selectedBlock="selectedBlock"
      :bannerUrl="banner"
      @update:bannerUrl="updateBannerUrl"
      :bannerMargin="Number(bannerMargin)"
      :underBannerTextFontSize="Number(underBannerTextFontWeight)"
      @update:bannerMargin="bannerMarginUpdate"
      @update:fontWeight="underBannerTextFontWeightUpdate"
    @update:bannerBgColor="updateBannerBgColor" />
  </div>
</template>