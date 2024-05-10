<script setup>
import { watch } from "vue";
import { documentActions } from "../../../store/DocumentActions";

const store = documentActions();

const downloadHTML = () => {
  store.downloadHtml();
};
</script>

<template>
  <div class="flex gap-5 w-full justify-center mb-10 flex-wrap">
    <button
      class="button bg-orange-500 rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
      @click="downloadHTML"
    >
      Descargar HTML
    </button>
    <button
      class="button bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      Guardar
    </button>
  </div>
</template>

<style scoped>
.button {
  @apply px-4 py-2 text-slate-50 shadow-md focus:ring-opacity-50 transition duration-150 ease-in-out me-3 ms-3;
}
</style>