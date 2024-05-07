<script setup>
import Dropdown from "./AccountDropdown.vue";
import LoginButton from "./LoginButton.vue";
import Logo from "../../assets/img/logo.png";
import { defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();




</script>

<template>
  <nav class="navBar">
    <div
      class="sm:ms-4 md:ms-8 w-14 px-2 my-auto filter hover:drop-shadow-xl hover:drop-shadow-indigo-500 dark:brightness-200 dark:invert mx-3"
    >
      <a href=""><img :src="Logo"  alt="Logo" /></a>
    </div>
    <div id="buttons" class="size-full flex overflow-auto place-content-start">
      <div class="navBarButton"><p>Inicio</p></div>
      <div class="navBarButton"><p>Mis proyectos</p></div>
    </div>
    
    <Dropdown v-if="store.state.AuthUser" />
    <LoginButton v-else />
  </nav>
</template>

<style scoped>
.navBar {
  @apply size-full min-h-12 bg-slate-200 dark:bg-slate-900 flex text-center items-end z-50 shadow-sm shadow-indigo-950;
}

.navBarButton {
  @apply pt-6 pb-4 h-full min-w-32 my-auto cursor-pointer flex justify-center font-extrabold hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-gradient-to-t from-slate-300  dark:from-slate-800 rounded-t-lg;
}
</style>