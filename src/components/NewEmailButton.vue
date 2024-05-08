<script setup>
import { useRouter } from "vue-router";
import newEmailIcon from "../assets/img/newButton.png";
const router = useRouter();
</script>


<template>
  <button
    @click="() => router.push('/nuevo')"
    id="newButton"
    class="flex cursor-pointer transition-all duration-200 ease-linear z-20 shadow-xl rounded-lg bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-orange-700 hover:shadow-md ps-2 pe-12 py-4 content-start justify-center items-center"
  >
    <div class="size-4 md:size-7 mx-3">
      <img :src="newEmailIcon" />
    </div>
    <p class="text-slate-50 font-semibold">Nuevo</p>
  </button>
</template>

<style scoped>
</style>