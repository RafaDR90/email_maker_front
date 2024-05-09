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
const bannerBackground = ref("#ffffff");



const updateBannerBgColor = (newColor) => {
  bannerBackground.value = newColor;
};

/*----------------------------
            FIN BANNER
----------------------------*/

/*----------------------------
            TEXTO
----------------------------*/
const underBannerText = ref("Título de la promoción");
const defaultFont = getComputedStyle(document.documentElement).getPropertyValue('--default-font').trim();
const underBannerSelectedFont = ref({defaultFont});
const underBannerTextHeight = ref(43);
const underBannerTextFontSize = ref(16);
const underBannerTextFontWeight = ref(200);

const underBannerTextFontWeightUpdate = (newWeight) => {
  underBannerTextFontWeight.value = newWeight;
};

const underBannerTextFontSizeUpdate = (newSize) => {
  underBannerTextFontSize.value = newSize;
};

const underBannerTextHeightUpdate = (newHeight) => {
  underBannerTextHeight.value = newHeight;
};
const underBannerTextUpdate = (newText) => {
  underBannerText.value = newText;
};
const underBannerFontUpdate = (newFont) => {
    underBannerSelectedFont.value = newFont;
};
/*----------------------------
           FIN TEXTO
----------------------------*/

/*----------------------------
         CARDS GRID
----------------------------*/
const gridColumns = ref(3);
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
      :underBannerText="underBannerText"
      :underBannerSelectedFont="underBannerSelectedFont"
      :bannerBackground="bannerBackground"
      :underBannerTextHeight="underBannerTextHeight"
      :underBannerTextFontSize="underBannerTextFontSize"
      :underBannerTextFontWeight="underBannerTextFontWeight"
      :gridColumns="Number(gridColumns)"
    />
    <BlockEdit
      :selectedBlock="selectedBlock"
      :underBannerText="underBannerText"
      :underBannerTextHeight="underBannerTextHeight"
      :underBannerSelectedFont="underBannerSelectedFont"
      :underBannerTextFontSize="Number(underBannerTextFontSize)"
      :underBannerTextFontWeight="Number(underBannerTextFontWeight)"
      @update:fontWeight="underBannerTextFontWeightUpdate"
      @update:fontSize="underBannerTextFontSizeUpdate"
      @update:textHeight="underBannerTextHeightUpdate"
      @update:underBannerText="underBannerTextUpdate"
      @update:bannerBgColor="updateBannerBgColor"
      @update:fontSelected="underBannerFontUpdate"
    />
  </div>
</template>