<script setup>
import { onMounted } from "vue";
import Navbar from "./components/navbar/NavBar.vue";
import { useStore } from "vuex";

const store = useStore();

 

onMounted(() => {
  store.dispatch("checkToken");
});
</script>

<template>
  <header class="w-full h-16 shadow-sm shadow-indigo-950">
    <Navbar />
  </header>
  <div class="w-full min-h-[calc(100vh-4rem)] bg-indigo-200 z-0">
    <router-view />
  </div>
</template>
