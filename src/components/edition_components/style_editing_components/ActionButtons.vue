<script setup>
import { watch } from "vue";
import { documentActions } from "../../../store/DocumentActions";

/*Stores con estilos generales*/
import { cardStyle } from "../../../store/CardStyle";
import { useBannerVars } from "../../../store/BannerVars";
import { useEmailVars } from "../../../store/EmailVars";
import { gridVars } from "../../../store/GridVars";
import { underBannerTextVars } from "../../../store/UnderBannerText";
import ProductService from "../../../api/ProductService";
import html2canvas from 'html2canvas';




const store = documentActions();


let downloadTimeOut = null;
let toggleModalTimeOut = null;
const downloadHTML = () => {
  store.setAddProductModal(false);

  if (downloadTimeOut) {
    clearTimeout(downloadTimeOut);
  }
  downloadTimeOut = setTimeout(() => {
    store.downloadHtml()
  }, 5);
  if (toggleModalTimeOut) {
    clearTimeout(toggleModalTimeOut);
  }
  toggleModalTimeOut = setTimeout(() => {
    store.setAddProductModal(true);
  }, 10);
};

let toggleSvgModelTimeOut = null;
let timeOutSvgId = null;
const saveTemplate = () => {
  if (timeOutSvgId || toggleSvgModelTimeOut) {
    return;
  }
  const cardStyleStore = cardStyle();
  const bannerVars = useBannerVars();
  const emailVars = useEmailVars();
  const gridVarsStore = gridVars();
  const underBannerTextVarsStore = underBannerTextVars();
  let data = {
    cardStyle: [],
    bannerVars: [],
    emailVars: [],
    gridVars: [],
    underBannerTextVars: [],
  };

  for (const key in cardStyleStore) {
    if (key !== '$id' && typeof cardStyleStore[key] !== 'function') {
      data.cardStyle.push({ key: key, value: cardStyleStore[key] });
    }
  }
  for (const key in bannerVars) {
    if (key !== '$id' && typeof bannerVars[key] !== 'function') {
      data.bannerVars.push({ key: key, value: bannerVars[key] });
    }
  }
  for (const key in emailVars) {
    if (key !== '$id' && typeof emailVars[key] !== 'function') {
      data.emailVars.push({ key: key, value: emailVars[key] });
    }
  }
  for (const key in gridVarsStore) {
    if (key !== '$id' && typeof gridVarsStore[key] !== 'function') {
      data.gridVars.push({ key: key, value: gridVarsStore[key] });
    }
  }
  for (const key in underBannerTextVarsStore) {
    if (key !== '$id' && typeof underBannerTextVarsStore[key] !== 'function') {
      data.underBannerTextVars.push({ key: key, value: underBannerTextVarsStore[key] });
    }
  }
  data = JSON.stringify(data);
  //ProductService.uploadStylesData(data).then((res) => {
  //});
  var img = null
  store.setCreatingSvg(true);
  timeOutSvgId = setTimeout(() => {
    html2canvas(document.getElementById("emailContainer")).then(function (canvas) {
      img = canvas.toDataURL("image/png");
      console.log(img);
    });
    toggleSvgModelTimeOut = setTimeout(() => {
      store.setCreatingSvg(false);
    }, 10);
  }, 5);



}
</script>

<template>
  <div class="flex gap-5 w-full justify-center mb-3 flex-wrap">
    <button
      class="button bg-orange-500 rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
      @click="downloadHTML">
      Descargar HTML
    </button>
    <button @click="saveTemplate"
      class="button bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
      Guardar
    </button>
  </div>
</template>

<style scoped>
.button {
  @apply px-4 py-2 text-slate-50 shadow-md focus:ring-opacity-50 transition duration-150 ease-in-out me-3 ms-3;
}
</style>