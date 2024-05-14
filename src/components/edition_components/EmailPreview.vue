<script setup>
import Banner from "../../assets/img/boton-agregar.png";
import Grid from "../email_components/Grid.vue";
import EmailHeader from "../email_components/EmailHeader.vue";
import BottomBanner from "../email_components/BottomBanner.vue";
import BottomSection from "../email_components/BottomSection.vue";
import EmailFooter from "../email_components/EmailFooter.vue";
import { defineProps, watch, ref, computed } from "vue";
import { useBannerVars } from "../../store/BannerVars";
import { useEmailVars } from "../../store/EmailVars";
import { underBannerTextVars } from "../../store/UnderBannerText";
import { documentActions } from "../../store/DocumentActions";

const documentActionsStore = documentActions();

const bannerStore = useBannerVars();
const emailVarsStore = useEmailVars();
const underBannerTextStore = underBannerTextVars();

//obtengo las props del componente
const props = defineProps({
  //underBannerText
  underBannerSelectedFont: {
    type: Object,
    default: () => ({ fontFamily: "Montserrat" }),
  },
  //grid
  gridColumns: Number,
});

const updateSelectedBlock = (block) => {
  documentActionsStore.updateSelectedBlock(block);
};

watch(
  () => documentActionsStore.downloadHtmlEmit,
  () => {
    downloadHTMLPrueba();
  }
);
const downloadHTML = () => {
  const html = document.getElementById("emailContainer").outerHTML;
  const blob = new Blob([html], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "email.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const downloadHTMLPrueba = () => {
  const headContent = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${emailVarsStore.emailSubject}</title>  
</head>`;

  const emailContainerHTML =
    document.getElementById("emailContainer").outerHTML;
  const html = `<!DOCTYPE html><html>${headContent}<body>${emailContainerHTML}</body></html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "email.html";
  a.click();
  URL.revokeObjectURL(url);
};

/**
 * Función para comprobar si la imagen es una URL
 */
function isURL(newUrl) {
  try {
    const url = new URL(newUrl);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
}

/**
 * Función para comprobar si la imagen es válida.
 */
function isImageValid(imageURL) {
  if (!isURL(imageURL) ) {
    console.log("a");
    return false;
  }
  const img = new Image();
  img.src = imageURL;

  return img.complete && img.naturalWidth !== 0;
}
</script>


<template>
  <div
    class="min-w-[649px] bg-indigo-50 min-h-full w-[50%] py-16 flex flex-col place-items-center justify-start"
  >
    <div
      id="emailContainer"
      style="width: 649px; height: fit-content; background-color: transparent"
    >
      <!-- Asunto -->
      <div
        id="emailSubject"
        class="selectable-block"
        style="color: #718096; font-size: 0.875rem; overflow: clip"
        :class="{ fontFamily: emailVarsStore.emailSubjectFont.fontFamily }"
        @click="updateSelectedBlock('emailSubject')"
      >
        <p>
          {{ emailVarsStore.emailSubject }}
        </p>
        <div
          v-if="emailVarsStore.emailSubject.length <= 0"
          style="display: flex; justify-content: center"
        >
          <p>**Aquí va el asunto del email**</p>
        </div>
      </div>

      <div style="border: 1px solid rgb(230, 230, 230)">
        <!-- Cabecera empresa -->
        <EmailHeader />

        <!-- Contenido del email -->
        <div
          id="emailContent"
          style="
            width: 100%;
            min-height: 5rem;
            padding-bottom: 2rem;
            display: flex;
            flex-direction: column;
            height: max-content;
          "
          :style="{
            backgroundColor: emailVarsStore.bgColor || '#FFFFFF',
          }"
        >
          <div @click="updateSelectedBlock('banner')" class="selectable-block">
            <div
              v-if="!bannerStore.bannerUrl"
              :style="{
                backgroundColor: bannerStore.bannerColor || '',
                paddingBottom: bannerStore.marginBottom + 'px',
              }"
              style="
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                "
              >
                <img
                  style="width: 5rem; height: 5rem"
                  :src="Banner"
                  alt="imagen banner"
                />

                <p style="font-size: 2.25rem; color: #6b7280">Inserte imagen</p>
              </div>
            </div>
            <div
              v-else
              :style="{
                backgroundColor: bannerStore.bannerColor,
                paddingBottom: bannerStore.marginBottom + 'px',
              }"
            >
              <img
                v-if="isImageValid(bannerStore.bannerUrl)"
                style="width: 100%"
                :src="bannerStore.bannerUrl"
                alt="imagen banner"
              />
              <div
                v-else
                style="width: 100%; padding: 20px; background-color: lightcoral"
                align="center"
              >
                <p style="color: darkred; font-weight: bold">
                  ¡Imagen no encontrada!
                </p>
              </div>
            </div>
          </div>
          <div
            @click="updateSelectedBlock('underBannerText')"
            class="selectable-block"
            style="
              min-height: max-content;
              display: flex;
              justify-content: center;
              align-items: center;
            "
            :style="{
              minHeight:
                underBannerTextStore.height === 0
                  ? 'max-content'
                  : underBannerTextStore.height + 'px',
              fontWeight: underBannerTextStore.weight ? 600 : 200,
              textSize: underBannerTextStore.fontSize,
              fontFamily: underBannerTextStore.font.fontFamily,
              color: underBannerTextStore.color,
              backgroundColor: underBannerTextStore.bgColor,
            }"
          >
            <p
              class="text-center w-full"
              v-if="underBannerTextStore.text"
              style="text-align: center; width: 100%"
              :style="{
                fontSize: underBannerTextStore.fontSize + 'px',
              }"
            >
              {{ underBannerTextStore.text }}
            </p>
          </div>
          <Grid />
        </div>
        <BottomSection>
          <div class="selectable-block">
            <BottomBanner />
          </div>
        </BottomSection>
        <EmailFooter />
      </div>
    </div>
  </div>
</template>
