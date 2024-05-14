<script setup>
import GridOptions from "./style_editing_components/GridOptions.vue";
import GeneralOptions from "./style_editing_components/GeneralOptions.vue";
import ActionButtons from "./style_editing_components/ActionButtons.vue";
import ProductCardOptions from "./style_editing_components/CardGeneralOptions.vue";

import { ref } from "vue";
import { useStyleVars } from "../../store/StyleVars";

const styleStore = useStyleVars();

const gridConfiguration = ref(styleStore.gridConfiguration);
</script>


<template>
  <div
    class="w-[25%] h-[calc(100vh-4rem)] bg-indigo-100 dark:bg-indigo-950 flex flex-col justify-between shadow-md z-20 overflow-auto p-4"
  >
    <!--<div class="flex flex-col h-full justify-start mb-4 p-4 ">-->
    <div class="flex flex-col w-full items-center">
      <h2 >Opciones generales</h2>
      <div class="divider" />
      <GridOptions />
      <GeneralOptions />
      <ProductCardOptions />
    </div>
    <!--</div>-->

    <!-- Descargar HTML y Guardar -->
    <ActionButtons  />
  </div>
</template>