<script setup>
import BlockEdit from './edition_components/BlockEdit.vue';
import StyleEdit from './edition_components/StyleEdit.vue';
import EmailPreview from './edition_components/EmailPreview.vue';
import { ref } from 'vue';

/*----------------------------
            BANNER
----------------------------*/
const banner = ref('data:image/jpeg;base64,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');
const bannerMargin = ref(22);
const bannerBackground = ref('#ffffff');
/*----------------------------
            FIN BANNER
----------------------------*/

/*----------------------------
            TEXTO
----------------------------*/
const underBannerText = ref('Hola mundo');
/*----------------------------
            FIN TEXTO
----------------------------*/



</script>

<template>
    <div class=" w-full min-h-full flex">
        <BlockEdit />
        <EmailPreview :selectedBanner="banner" :bannerMargin="bannerMargin" :underBannerText="underBannerText" />
        <StyleEdit />
    </div>
</template>