<script setup>
import { useRouter } from "vue-router";
import newEmailIcon from "../assets/img/newButton.png";
import FAB from "../components/FloatingActionButton.vue";

const router = useRouter();
</script>


<template>
  <div
    class="w-full h-full alt-background flex justify-center overflow-y-auto overflow-x-hidden"
  >
    <!-- Botón Nuevo Email -->
    <div class="fixed top-28 left-[115px] z-30">
      <button
        @click="() => router.push('/nuevo')"
        class="flex cursor-pointer z-20 shadow-xl rounded-lg bg-indigo-500 ps-2 md:pe-14 py-4 content-start justify-center items-center"
      >
        <div class="size-4 md:size-7 mx-3">
          <img :src="newEmailIcon" />
        </div>
        <p class="text-slate-50 font-semibold">Nuevo</p>
      </button>
    </div>
    <div
      class="flex flex-col items-start my-5 bg-slate-200 dark:bg-slate-900 rounded-lg mx-20 px-10 py-10 pt-20 backdrop-opacity-90 z-10 shadow-md h-full"
    >
      <br />
      <h2 class="font-bold">Mis plantillas</h2>
      <div class="bg-gradient-to-r from-slate-400 w-72 min-w-7 h-[2px]"></div>
      <br />
      <div
        class="grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7"
      >
        <div v-for="index in 15" :key="index">
          <div
            class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center"
          >
            Ejemplo
          </div>
        </div>
      </div>
      <br />
      <h2 class="font-bold">Otras plantillas</h2>
      <div class="bg-gradient-to-r from-slate-400 w-72 min-w-7 h-[2px]"></div>
      <br />
      <div
        class="grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7"
      >
        <div v-for="index in 10" :key="index">
          <div
            class="size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center"
          >
            Ejemplo
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
