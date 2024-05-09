<script setup>
import Banner from "../../assets/img/boton-agregar.png";
import Grid from "../Grid.vue";
import { defineProps, defineEmits, watch, ref } from "vue";
import { useBannerVars } from "../../store/BannerVars";
import { underBannerTextVars } from "../../store/UnderBannerText";
import { useStyleVars } from "../../store/StyleVars";
import ProductCard from "../ProductCard.vue";
import { documentActions } from "../../store/DocumentActions";

const documentActionsStore = documentActions();

const bannerStore = useBannerVars();
const underBannerTextStore = underBannerTextVars();
const styleStore = useStyleVars();

const emit = defineEmits(["update:selectedBlock"]);

const emailContainer = ref(null);

//obtengo las props del componente
const props = defineProps({
  //banner
  selectedBanner: String,
  //underBannerText
  underBannerSelectedFont: {
    type: Object,
    default: () => ({ fontFamily: "Roboto" }), // Establece un valor predeterminado con fontFamily 'Roboto'
  },
  //grid
  gridColumns: Number,
});

const updateSelectedBlock = (block) => {
  emit("update:selectedBlock", block);
};

watch(
  () => documentActionsStore.downloadHtmlEmit,
  (newValue) => {
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
  const html = document.getElementById("emailContainer").outerHTML;
  //inicio descarga de html, no quiero crear un <a> quiero que se inicie la descarga
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "email.html";
  a.click();
  URL.revokeObjectURL(url);
};
</script>


<template>
  <div class="min-w-[649px] bg-blue-50 min-h-full w-[50%] flex justify-center">
    <div
      id="emailContainer"
      class="w-[649px] bg-white min-h-20 mt-16 pb-10 mb-16 flex flex-col h-max"
    >
      <div @click="updateSelectedBlock('banner')" class="selectable-block">
        <div
          v-if="!bannerStore.bannerUrl"
          :style="{
            backgroundColor: bannerStore.bannerColor || '',
            paddingBottom: bannerStore.marginBottom + 'px',
          }"
          class="w-full h-80 bg-red-600 border-2 border-gray-200 flex justify-center items-center"
        >
          <div class="flex flex-col justify-center items-center">
            <img class="w-20 h-20" :src="Banner" alt="imagen banner" />
            <p class="text-4xl text-gray-500">Inserte imagen</p>
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
            class="w-full"
            :src="bannerStore.bannerUrl"
            alt="imagen banner"
          />
        </div>
      </div>
      <div
        @click="updateSelectedBlock('underBannerText')"
        class="selectable-block min-h-max flex justify-center items-center"
        :style="{
          minHeight:
            underBannerTextStore.height === 0
              ? 'max-content'
              : underBannerTextStore.height + 'px',
          fontWeight: underBannerTextStore.weight ? 600 : 200,
          textSize: underBannerTextStore.fontSize,
          fontFamily: underBannerSelectedFont.fontFamily || 'Roboto',
          color: underBannerTextStore.color,
          backgroundColor: underBannerTextStore.bgColor,
        }"
      >
        <p
          class="text-center"
          v-if="underBannerTextStore.text"
          :style="{
            fontSize: underBannerTextStore.fontSize + 'px',
          }"
        >
          {{ underBannerTextStore.text }}
        </p>
      </div>

      <Grid :gridConfiguration="styleStore.gridConfiguration">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </div>
  </div>
</template>

<style scoped>
.selectable-block {
  @apply w-full cursor-pointer hover:border-4 hover:border-orange-400 hover:shadow-lg;
}
</style>


        <!--
        <div class="items-container">
         
          <div v-for="index in 100" :key="index">
            <div
              class="selectable-block h-60 bg-red-500 flex justify-center items-center"
            >
              <div class="bg-green-200 w-[80%] h-[90%]"></div>
            </div>
          </div>
        </div>



        -->