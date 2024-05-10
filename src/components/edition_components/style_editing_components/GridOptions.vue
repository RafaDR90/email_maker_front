<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  gridConfiguration: Object,
  setGridConfiguration: {
    type: Function,
    default: () => {
      console.log("setGridConfiguration vacío");
    },
  },
});

// Imágenes de distribución de columnas
const columns_dist_light = ref([
  {
    id: 1,
    gridConfiguration: { gridColumns: 1, gridSpans: [1] },
    imageUrl: "/src/assets/img/columns_dist/1columna_light.png",
  },
  {
    id: 2,
    gridConfiguration: { gridColumns: 2, gridSpans: [1, 1] },
    imageUrl: "/src/assets/img/columns_dist/2columnas_light.png",
  },
  {
    id: 3,
    gridConfiguration: { gridColumns: 3, gridSpans: [1, 1, 1] },
    imageUrl: "/src/assets/img/columns_dist/3columnas_light.png",
  },
  {
    id: 4,
    gridConfiguration: { gridColumns: 3, gridSpans: [1, 2] },
    imageUrl: "/src/assets/img/columns_dist/1_2_columnas_light.png",
  },
  {
    id: 5,
    gridConfiguration: { gridColumns: 3, gridSpans: [2, 1] },
    imageUrl: "/src/assets/img/columns_dist/2_1_columnas_light.png",
  },
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
  console.log("Dist seleccionada: ", dist);
  props.setGridConfiguration(dist.gridConfiguration);
  selectedDist.value = dist;
};
</script>

<template>
  <div class="styleEditItem">
    <h2>Opciones de la cuadrícula</h2>
    <div class="divider" />
    <div class="button-group my-4">
      <button
        v-for="dist in columns_dist_light"
        :key="dist.id"
        :class="{ active: selectedDist === dist }"
        @click="selectDist(dist)"
      >
        <!-- Mostrar la imagen -->
        <img
          :src="dist.imageUrl"
          :alt="dist.gridConfiguration.gridColumns + ' columnas'"
          class="border border-indigo-900 rounded-md z-10 shadow-md hover:scale-105 hover:shadow-indigo-400"
          style="max-width: 100px; max-height: 100px"
        />
      </button>
    </div>
  </div>
</template>

<style  scoped>
.button-group {
  @apply flex flex-grow flex-wrap gap-3 gap-y-5 place-content-center;
}
</style>