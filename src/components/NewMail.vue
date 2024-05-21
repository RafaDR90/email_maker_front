<script setup>
import BlockEdit from "./edition_components/BlockEdit.vue";
import StyleEdit from "./edition_components/StyleEdit.vue";
import EmailPreview from "./edition_components/EmailPreview.vue";
import { documentActions } from "../store/DocumentActions";
import { ref } from "vue";

const documentActionsStore = documentActions();
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

/*----------------------------
       FIN CARDS GRID
----------------------------*/
</script>

<template>
  <div class="w-full min-h-full flex relative">
    <p v-if="documentActionsStore.error" class=" absolute w-full bg-red-300 bg-opacity-80 text-red-800  font-bold z-50 py-5 border-y border-red-800 text-center">{{documentActionsStore.error}}</p>
    <p v-if="documentActionsStore.exito" class=" absolute w-full bg-green-300 bg-opacity-80 text-green-800  font-bold z-50 py-5 border-y border-green-800 text-center">{{documentActionsStore.exito}}</p>
    <StyleEdit />
    <EmailPreview class="h-[calc(100vh-4rem)] overflow-y-auto" @update:selectedBlock="updateSelectedBlock" :selectedBlock="selectedBlock" 
      :underBannerSelectedFont="underBannerSelectedFont" />
    <BlockEdit :selectedBlock="selectedBlock" :underBannerSelectedFont="underBannerSelectedFont"
      @update:fontSelected="underBannerFontUpdate" />
  </div>
</template>