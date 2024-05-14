<script setup>
import { gridVars } from "../../../store/GridVars";
import DropDownComp from "../block_editing_components/mini_components/DropDownComp.vue";

const gridConfiguration = gridVars();

const changeMode = (mode) => {
  gridConfiguration.setSelectedMode(mode);
};
</script>

<template>
  <div class="styleEditItem">
    <DropDownComp :buttonText="'Opciones de la cuadrícula'">
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
    </DropDownComp>
  </div>
</template>

<style scoped>
.button-group {
  @apply flex flex-grow flex-wrap gap-3 gap-y-5 place-content-center;
}
</style>