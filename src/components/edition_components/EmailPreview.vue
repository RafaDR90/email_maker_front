<script setup>
import Grid from "../email_components/Grid.vue";
import EmailHeader from "../email_components/EmailHeader.vue";
import BottomSection from "../email_components/BottomSection.vue";
import NewBanner from "./block_editing_components/mini_components/Banner.vue";
import EmailFooter from "../email_components/EmailFooter.vue";
import { defineProps, watch, ref, provide } from "vue";
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
  const content = `<div style="width: 100%; display: flex; justify-content: center; align-items: center;">${emailContainerHTML}</div>`;
  const html = `<!DOCTYPE html><html>${headContent}<body>${content}</body></html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;

  const currentDate = new Date();

  const formattedDate = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "_");

  const formattedTime = currentDate
    .toTimeString()
    .slice(0, 8)
    .replace(/:/g, "_");

  // Crear el nombre de archivo con la fecha y la hora
  const fileName = `email-${formattedDate}-${formattedTime}.html`;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

</script>


<template>
  <div class="min-w-[649px] bg-indigo-50 min-h-full w-[50%] py-16 flex flex-col place-items-center justify-start">
    <div id="emailContainer" style="
        width: 649px;
        height: fit-content;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: start;
        align-content: center;
      ">
      <!-- Asunto -->
      <div v-if="!documentActionsStore.creatingSvg" id="emailSubject" class="selectable-block"
        style="color: #718096; width: 100%; font-size: 0.875rem; overflow: clip"
        :class="{ fontFamily: emailVarsStore.emailSubjectFont.fontFamily }"
        @click="updateSelectedBlock('emailSubject')">
        <p>
          {{ emailVarsStore.emailSubject }}
        </p>
        <div v-if="emailVarsStore.emailSubject.length <= 0" style="display: flex; justify-content: center">
          <p>**Aquí va el asunto del email**</p>
        </div>
      </div>

      <div style="border: 1px solid rgb(230, 230, 230)">
        <!-- Cabecera empresa -->
        <EmailHeader v-if="!documentActionsStore.creatingSvg" />

        <!-- Contenido del email -->
        <div id="emailContent" style="
            width: 100%;
            min-height: 5rem;
            padding-bottom: 2rem;
            display: flex;
            flex-direction: column;
            height: max-content;
          " :style="{
            backgroundColor: emailVarsStore.bgColor || '#FFFFFF',
          }">
          <!-- Top Banner -->
          <NewBanner v-if="!documentActionsStore.creatingSvg" :bannerImageUrl="bannerStore.bannerUrl"
            :bannerBackgroundColor="bannerStore.bannerColor" :bannerBottomMargin="bannerStore.marginBottom"
            @click="updateSelectedBlock('banner')" class="selectable-block" />


          <div v-else :style="{
            backgroundColor: bannerStore.bannerColor,
            paddingBottom: bannerStore.marginBottom + 'px',
          }">
            <img style="width: 100%" src="@/assets/img/defaultBanner.png" alt="imagen banner" />
          </div>



          <!-- Top Banner Text-->
          <div @click="updateSelectedBlock('underBannerText')" class="selectable-block" style="
              min-height: max-content;
              display: flex;
              justify-content: center;
              align-items: center;
            " :style="{
              minHeight:
                underBannerTextStore.height === 0
                  ? 'max-content'
                  : underBannerTextStore.height + 'px',
              fontWeight: underBannerTextStore.weight ? 600 : 200,
              textSize: underBannerTextStore.fontSize,
              fontFamily: underBannerTextStore.font.fontFamily,
              color: underBannerTextStore.color,
              backgroundColor: underBannerTextStore.bgColor,
            }">
            <p class="text-center w-full" v-if="underBannerTextStore.text" style="text-align: center; width: 100%"
              :style="{
                fontSize: underBannerTextStore.fontSize + 'px',
              }">
              {{ underBannerTextStore.text }}
            </p>
          </div>

          <!-- Products Grid -->
          <Grid />
        </div>

        <!-- Bottom Section -->
        <BottomSection v-if="!documentActionsStore.creatingSvg">
          <NewBanner class="selectable-block" :bannerImageUrl="bannerStore.bottomBannerUrl"
            :bannerBackgroundColor="bannerStore.bottomBannerColor"
            :bannerBottomMargin="bannerStore.bottomBannerMarginBottom" @click="updateSelectedBlock('bottomBanner')" />
        </BottomSection>
        <EmailFooter v-if="!documentActionsStore.creatingSvg" />
      </div>
    </div>
  </div>
</template>
