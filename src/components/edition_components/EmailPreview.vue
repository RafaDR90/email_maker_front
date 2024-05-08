<script setup>
import Banner from "../../assets/img/boton-agregar.png";
import { defineProps, onMounted, ref, nextTick, watch, defineEmits } from 'vue';

const emit = defineEmits(['update:selectedBlock']);

//obtengo las props del componente
const props = defineProps({
    //banner
    selectedBanner: String,
    bannerMargin: Number,
    bannerBackground: String,
    //underBannerText
    underBannerText: String,
    underBannerTextHeight: Number,
    underBannerTextFontSize: Number,
    //grid
    gridColums: String
});

onMounted(async() => {
    await nextTick();
    const grid = document.querySelector('.dynamic-grid');
    grid.style.gridTemplateColumns = `repeat(${props.gridColums}, 1fr)`;
});

const forceUpdate = ref(false);
//console.log cuando cambie bannerMargin
watch(() => props.bannerMargin, (newVal) => {
    console.log(newVal);
    forceUpdate.value = !forceUpdate.value;
});

const updateSelectedBlock = (block) => {
    emit('update:selectedBlock', block);
};

</script>


<template>
    <div class=" min-w-[649px] bg-blue-50 min-h-full w-[50%] flex justify-center">
        <div id="emailContainer" class=" w-[649px] bg-white min-h-20 mt-20 flex flex-col h-max  ">
            <div @click="updateSelectedBlock('')" class="w-full cursor-pointer">
                <div v-if="!selectedBanner" :style="{ backgroundColor: bannerBackground || '', marginBottom: bannerMargin + 'px' }"
                    class="w-full h-80 bg-gray-100 border-4 border-gray-200 flex justify-center items-center">
                    <div class="flex flex-col justify-center items-center">
                        <img class="w-20 h-20" :src="Banner" alt="imagen banner">
                        <p class=" text-4xl text-gray-500">Inserte imagen</p>
                    </div>
                </div>
                <div v-else :style="{ marginBottom: bannerMargin + 'px' }">
                    <img class="w-full" :src="selectedBanner" alt="imagen banner">
                </div>
            </div>
            <div @click="updateSelectedBlock('underBannerText')"  class=" cursor-pointer w-full min-h-max flex justify-center items-center"
                :style="{ minHeight: underBannerTextHeight === 0 ? 'max-content' : underBannerTextHeight + 'px' }">
                <p v-if="underBannerText" :style="{ fontSize: underBannerTextFontSize + 'px' }">
                    {{ underBannerText }}
                </p>
            </div>
            <div class="grid gap-1 w-full border border-green-200 dynamic-grid">
                <div class=" w-full h-60 bg-red-500 flex justify-center items-center">
                    <div class="bg-green-200 w-[80%] h-[90%]"></div>
                </div>
                <div class=" w-full h-60 bg-red-500 flex justify-center items-center">
                    <div class="bg-green-200 w-[80%] h-[90%]"></div>
                </div>
                <div class=" w-full h-60 bg-red-500 flex justify-center items-center">
                    <div class="bg-green-200 w-[80%] h-[90%]"></div>
                </div>
                <div class=" w-full h-60 bg-red-500 flex justify-center items-center">
                    <div class="bg-green-200 w-[80%] h-[90%]"></div>
                </div>
                <div class=" w-full h-60 bg-red-500 flex justify-center items-center">
                    <div class="bg-green-200 w-[80%] h-[90%]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dynamic-grid {
    grid-template-columns: repeat(3, 1fr);
}
</style>