<script setup>
import BlockEdit from "./edition_components/BlockEdit.vue";
import StyleEdit from "./edition_components/StyleEdit.vue";
import EmailPreview from "./edition_components/EmailPreview.vue";
import { ref } from "vue";

/*----------------------------
            BANNER
----------------------------*/
const banner = ref("");
const bannerMargin = ref(22);
const bannerBackground = ref("#ffffff");

const updateBannerUrl = (newUrl) => {
    banner.value = newUrl;
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
/*----------------------------
           FIN TEXTO
----------------------------*/

/*----------------------------
         CARDS GRID
----------------------------*/
const gridColums = ref(3);
/*----------------------------
       FIN CARDS GRID
----------------------------*/


</script>

<template>
    <div class="w-full min-h-full flex">
        <StyleEdit />
        <EmailPreview :key="gridColums" :selectedBanner="banner" :bannerMargin="bannerMargin" :underBannerText="underBannerText"
            :bannerBackground="bannerBackground" :underBannerTextHeight="underBannerTextHeight"
            :underBannerTextFontSize="underBannerTextFontSize" :gridColums="gridColums" />
        <BlockEdit :bannerUrl="banner" @update:bannerUrl="updateBannerUrl"  />
    </div>
</template>