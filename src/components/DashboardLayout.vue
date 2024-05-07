<script setup>
import { useRouter } from 'vue-router';
import newEmailIcon from "../assets/img/newButton.png";
import FAB from "../components/FloatingActionButton.vue";

const router = useRouter();

</script>


<template>
  <div class="w-full h-[calc(100vh-4rem)] alt-background flex justify-center ">
    <div
      class="flex flex-col items-start overflow-y-auto overflow-x-hidden my-5 bg-slate-200 dark:bg-slate-900 rounded-lg mx-20 px-10 py-10 backdrop-opacity-90 z-10 shadow-md"
    >
      <!-- Botón Nuevo Email -->
    
      <button
        @click="() => router.push('/nuevo')"
        class="flex cursor-pointer z-20 shadow-md rounded-lg bg-indigo-500 ps-2 md:pe-14 py-4 content-start justify-center items-center "
      >
        <div class="size-4 md:size-7 mx-3 ">
          <img :src="newEmailIcon" />
        </div>
        <p class="text-slate-50 font-semibold">Nuevo</p>
      </button>

      

      <br />
      <h2 class="font-bold">Mis plantillas</h2>
      <div class="bg-gradient-to-r from-slate-400 w-72 min-w-7 h-[2px]"></div>
      <br />
      <div class="grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 ">
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
      </div>
      <br />
      <h2 class="font-bold">Otras plantillas</h2>
      <div class="bg-gradient-to-r from-slate-400 w-72 min-w-7 h-[2px]"></div>
      <br />
      <div class="grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 ">
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
        <div class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center">Ejemplo</div>
      </div>
    </div>
    <FAB class="z-50"/>
  </div>
</template>
