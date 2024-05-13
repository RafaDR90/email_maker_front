<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue';


const props = defineProps({
    foundProducts: Array,
});

const input = ref('');
const showResults = ref(false);

const emit = defineEmits(['search', 'exportResult']);

let timeoutId = null;
watch(input, (newVal) => {
    if (newVal.length > 3) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            emit('search', newVal);
        }, 250);
    }
});

watch(() => props.foundProducts, () => {
    showResults.value = true;
});

const hideResults = () => {
    showResults.value = false;
};

const exportResult = (result) => {
    emit('exportResult', result);
    showResults.value = false;
}
</script>

<template>
    <label for="search" class="text-md">Referencia:</label>
    <div class="relative border w-11/12 rounded p-2 bg-white border-blue-500">
        <input type="text" v-model="input" placeholder="Inserte referencia" class="w-full m-0 p-0"
            @blur="hideResults" />
        <div v-if="showResults"
            class="absolute w-full bg-white border border-gray-300 top-full left-0 rounded h-[30vh] overflow-auto">
            <div v-for="result in props.foundProducts" :key="result" @click="exportResult(result)" @mousedown.prevent
                class="p-1">
                <div class="hover:bg-gray-100 active:bg-gray-200 cursor-pointer flex h-min items-center">
                    <img :src="result.url_imagen_compress" alt="imagen producto" class="h-10 mr-2">
                    <div>
                        <p class="text-sm">{{ result.referencia }}</p>
                        <p class=" font-bold text-sm">{{ result.titulo_small }}</p>
                    </div>
                </div>
                <div class="w-full border-b border-gray-200 hover:bg-white mt-2" />
            </div>
        </div>
    </div>
</template>