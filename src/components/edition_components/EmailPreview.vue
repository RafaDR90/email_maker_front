<script setup>
import Banner from "../../assets/img/boton-agregar.png";
import { defineProps, ref } from 'vue';

const emit = defineEmits(['mas']);

//obtengo las props del componente
const props = defineProps({
    selectedBanner: String,
    bannerMargin: Number,
    underBannerText: String,
});


</script>


<template>
    <div class=" min-w-[649px] bg-green-300 min-h-full w-[50%] flex justify-center">
        <div id="emailContainer" class=" w-[649px] min-h-20 mt-20 bg-blue-400 flex flex-col">
            <div class="w-full">
                <div v-if="!selectedBanner"
                    class="w-full h-80 bg-gray-100 border-4 border-gray-200 flex justify-center items-center">
                    <div class="flex flex-col justify-center items-center">
                        <img class="w-20 h-20" :src="Banner" alt="imagen banner">
                        <p class=" text-4xl text-gray-500">Inserte imagen</p>
                    </div>
                </div>
                <div v-else :style="{ paddingBottom: bannerMargin + 'px' }">
                    <img class="w-full" :src="selectedBanner" alt="imagen banner">
                </div>
            </div>
            <div>
                <p v-if="underBannerText" class="w-full text-center">{{ underBannerText }}</p>
            </div>
        </div>
    </div>
</template>