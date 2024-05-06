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
  <Navbar  />
  <main>
    <router-view />
  </main>
</template>
