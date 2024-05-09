<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  gridColumns: Number,
});

// Define tus items con las URLs de las imágenes
const items = ref([
  { id: 1, imageUrl: "ruta/de/la/imagen1.jpg" },
  { id: 2, imageUrl: "ruta/de/la/imagen2.jpg" },
  { id: 3, imageUrl: "ruta/de/la/imagen3.jpg" },
]);

// Define el item seleccionado
const selectedItem = ref(null);

// Función para seleccionar un item
const selectItem = (item) => {
  selectedItem.value = item;
};
</script>

<template>
  <div class="styleEditItem">
    <h2>Opciones de la cuadrícula</h2>
    <div class="divider" />
    <div class="button-group space-x-3">
      <button
        v-for="item in items"
        :key="item.id"
        :class="{ active: selectedItem === item }"
        @click="selectItem(item)"
      >
        <!-- Mostrar la imagen -->
        <img
          :src="item.imageUrl"
          :alt="item.id + ' columnas'"
          style="max-width: 100px; max-height: 100px"
        />
      </button>
    </div>
  </div>
</template>

<style  scoped>
</style>