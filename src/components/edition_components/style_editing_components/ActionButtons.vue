<script setup>
import { watch } from 'vue';
import { documentActions } from '../../../store/DocumentActions';

const store = documentActions();

const downloadHTML = () => {
    store.downloadHtml();
};


</script>

<template>
    <div class="flex gap-10  w-full justify-center mb-10">
        <button
            class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-150 ease-in-out"
            @click="downloadHTML"
            >Descargar HTML</button>
        <button
            class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >Guardar</button>
    </div>
</template>