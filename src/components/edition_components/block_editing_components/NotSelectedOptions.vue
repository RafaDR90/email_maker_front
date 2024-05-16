<script setup>
import puntero from "../../../assets/img/puntero.png";
</script>

<template>
  <div class="size-full flex flex-col justify-center items-center px-5">
    <div
      class="size-fit flex flex-col justify-center items-center px-3 border border-gray-700 border-dashed"
    >
      <img
        :src="puntero"
        class="h-[35%] mb-7 filter hover:drop-shadow-md hover:scale-105"
      />
      <h1 class="text-center text-gray-700 font-bold">
        Seleccione un bloque para comenzar a editarlo.
      </h1>
    </div>
  </div>
</template>