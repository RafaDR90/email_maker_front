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



/*----------------------------
            FIN BANNER
----------------------------*/

/*----------------------------
            TEXTO
----------------------------*/
const defaultFont = getComputedStyle(document.documentElement).getPropertyValue('--default-font').trim();
const underBannerSelectedFont = ref({ defaultFont });

const underBannerFontUpdate = (newFont) => {
  underBannerSelectedFont.value = newFont;
};
/*----------------------------
           FIN TEXTO
----------------------------*/

/*----------------------------
         CARDS GRID
----------------------------*/
//const gridColumns = ref(3);
/*----------------------------
       FIN CARDS GRID
----------------------------*/
</script>

<template>
  <div class="w-full min-h-full flex">
    <StyleEdit />
    <EmailPreview @update:selectedBlock="updateSelectedBlock" :selectedBlock="selectedBlock" :selectedBanner="banner"
      :underBannerSelectedFont="underBannerSelectedFont" />
    <BlockEdit :selectedBlock="selectedBlock" :underBannerSelectedFont="underBannerSelectedFont"
      @update:fontSelected="underBannerFontUpdate" />
  </div>
</template>