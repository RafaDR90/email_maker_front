<script setup>
import GridOptions from "./style_editing_components/GridOptions.vue";
import GeneralOptions from "./style_editing_components/GeneralOptions.vue";
import ActionButtons from "./style_editing_components/ActionButtons.vue";
import CardGeneralOptions from "./style_editing_components/CardGeneralOptions.vue";
</script>


<template>
  <div
    class="w-[25%] h-[calc(100vh-4rem)] bg-indigo-100 dark:bg-indigo-950 flex flex-col justify-between shadow-md z-20 overflow-auto p-4"
  >
    <div class="flex flex-col w-full items-center">
      <h2 >Opciones generales</h2>
      <div class="divider" />
      <GridOptions />
      <GeneralOptions />
      <CardGeneralOptions />
    </div>

    <!-- Descargar HTML y Guardar -->
    <ActionButtons  />
  </div>
</template>