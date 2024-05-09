<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  gridConfiguration: Object,
  setGridConfiguration: {type: Function, default: () =>{console.log("setGridConfiguration vacío");}},
});

// Imágenes de distribución de columnas
const columns_dist_light = ref([
  { id: 1, columnsNum: 1, columnsSpan: [1], imageUrl: "/src/assets/img/columns_dist/1columna_light.png" },
  { id: 2, columnsNum: 2, columnsSpan: [1, 1], imageUrl: "/src/assets/img/columns_dist/2columnas_light.png" },
  { id: 3, columnsNum: 3, columnsSpan: [1, 1, 1], imageUrl: "/src/assets/img/columns_dist/3columnas_light.png" },
  { id: 4, columnsNum: 3, columnsSpan: [1, 2, 0], imageUrl: "/src/assets/img/columns_dist/1_2_columnas_light.png" },
  { id: 5, columnsNum: 3, columnsSpan: [2, 1, 0], imageUrl: "/src/assets/img/columns_dist/2_1_columnas_light.png" },
]);
const columns_dist_dark = ref([
  { id: 1, imageUrl: "/src/assets/img/columns_dist/1columna_dark.png" },
  { id: 2, imageUrl: "/src/assets/img/columns_dist/2columnas_dark.png" },
  { id: 3, imageUrl: "/src/assets/img/columns_dist/3columnas_dark.png" },
  { id: 4, imageUrl: "/src/assets/img/columns_dist/1_2_columnas_dark.png" },
  { id: 5, imageUrl: "/src/assets/img/columns_dist/2_1_columnas_dark.png" },
]);

// Define el item seleccionado
const selectedDist = ref(null);

// Función para seleccionar un item
const selectDist = (dist) => {
  props.gridConfiguration(dist.columnsNum, dist.column1Span, dist.column2Span, dist.column3Span);
  selectedDist.value = dist;
};
</script>

<template>
  <div class="styleEditItem">
    <h2>Opciones de la cuadrícula</h2>
    <div class="divider" />
    <div class="button-group my-4">
      <button
        v-for="item in columns_dist_light"
        :key="item.id"
        :class="{ active: selectedDist === item }"
        @click="selectDist(item)"
      >
        <!-- Mostrar la imagen -->
        <img
          :src="item.imageUrl"
          :alt="item.id + ' columnas'"
          class="rounded-md z-10 shadow-md hover:scale-105 hover:shadow-indigo-400"
          style="max-width: 100px; max-height: 100px"
        />
      </button>
    </div>
  </div>
</template>

<style  scoped>
.button-group {
  @apply flex flex-grow flex-wrap gap-3 gap-y-5 place-content-center ;
}
</style>