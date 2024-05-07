<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/navbar/NavBar.vue';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

onMounted(() => {
  store.dispatch('checkToken');
});
</script>

<template>
  <header class=" w-full h-16 shadow-sm shadow-indigo-950">
    <Navbar />
  </header>
  <main class="w-full min-h-[calc(100vh-4rem)] bg-red-200 z-0">
    <router-view />
  </main>
</template>
