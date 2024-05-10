<script setup>
import { gridVars } from "../../../store/GridVars";

const gridConfiguration = gridVars();

const changeMode = (mode) => {
  gridConfiguration.setSelectedMode(mode);
};
</script>

<template>
  <div class="styleEditItem">
    <h2>Opciones de la cuadrícula</h2>
    <div class="divider" />
    <div class="button-group">
      <button
        v-for="(mode, key) in gridConfiguration.modes"
        class="flex flex-col"
        @click="changeMode(key)"
        :key="key"
      >
        <img
          :src="mode.imgUrl"
          :alt="gridConfiguration.gridColumns + ' columnas'"
          class="border border-indigo-900 rounded-md z-10 shadow-md hover:scale-105 hover:shadow-indigo-400"
          style="max-width: 100px; max-height: 100px"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-group {
  @apply flex flex-grow flex-wrap gap-3 gap-y-5 place-content-center;
}
</style>