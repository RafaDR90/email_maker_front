<script setup>
import Banner from "../../assets/img/boton-agregar.png";
import Grid from "../Grid.vue";
import { defineProps, defineEmits } from "vue";
import { useBannerVars } from "../../store/BannerVars";

const bannerStore = useBannerVars();

const emit = defineEmits(["update:selectedBlock"]);

//obtengo las props del componente
const props = defineProps({
  //banner
  selectedBanner: String,
  bannerMargin: Number,
  bannerBackground: String,
  //underBannerText
  underBannerText: String,
  underBannerSelectedFont: {
    type: Object,
    default: () => ({ fontFamily: "Roboto" }), // Establece un valor predeterminado con fontFamily 'Roboto'
  },
  underBannerTextHeight: Number,
  underBannerTextFontSize: Number,
  underBannerTextFontWeight: Number,
  //grid
  gridColumns: Number,
});

const updateSelectedBlock = (block) => {
  emit("update:selectedBlock", block);
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
            backgroundColor: bannerBackground || '',
            marginBottom: bannerMargin + 'px',
          }"
          class="w-full h-80 bg-red-600 border-2 border-gray-200 flex justify-center items-center"
        >
          <div class="flex flex-col justify-center items-center">
            <img class="w-20 h-20" :src="Banner" alt="imagen banner" />
            <p class="text-4xl text-gray-500">Inserte imagen</p>
          </div>
        </div>
        <div v-else :style="{ marginBottom: bannerMargin + 'px' }">
          <img class="w-full" :src="bannerStore.bannerUrl" alt="imagen banner" />
        </div>
      </div>
      <div
        @click="updateSelectedBlock('underBannerText')"
        class="selectable-block min-h-max flex justify-center items-center"
        :style="{
          minHeight:
            underBannerTextHeight === 0
              ? 'max-content'
              : underBannerTextHeight + 'px',
          fontWeight: underBannerTextFontWeight,
          textSize: underBannerTextFontSize,
          fontFamily: underBannerSelectedFont.fontFamily || 'Roboto',
        }"
      >
        <p
          class="text-center"
          v-if="underBannerText"
          :style="{
            fontSize: underBannerTextFontSize + 'px',
          }"
        >
          {{ underBannerText }}
        </p>
      </div>
      <Grid :gridColumns="gridColumns">
        <div
          class="selectable-block h-60 bg-red-500 flex justify-center items-center"
        >
          <div class="bg-green-200 w-[80%] h-[90%]"></div>
        </div>
        <div
          class="selectable-block h-60 bg-red-500 flex justify-center items-center"
        >
          <div class="bg-green-200 w-[80%] h-[90%]"></div>
        </div>
        <div
          class="selectable-block h-60 bg-red-500 flex justify-center items-center"
        >
          <div class="bg-green-200 w-[80%] h-[90%]"></div>
        </div>
        <div
          class="selectable-block h-60 bg-red-500 flex justify-center items-center"
        >
          <div class="bg-green-200 w-[80%] h-[90%]"></div>
        </div>
        <div
          class="selectable-block h-60 bg-red-500 flex justify-center items-center"
        >
          <div class="bg-green-200 w-[80%] h-[90%]"></div>
        </div>
      </Grid>
    </div>
  </div>
</template>

<style scoped>
/*
.dynamic-grid {
  grid-template-columns: repeat(3, 1fr);
}
*/
.selectable-block {
  @apply w-full cursor-pointer hover:border-4 hover:border-orange-400 hover:shadow-lg;
}
</style>