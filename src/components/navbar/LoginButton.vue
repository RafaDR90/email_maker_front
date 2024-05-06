<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const loginView = () => {
  router.push('/login');
}
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <div class="flex content-center items-center justify-center w-full">
        <p @click="loginView">Iniciar sesión</p>
      </div>
    </button>

    <div class="dropdown-content">
      <a class="text-sm">
        <p>¿No tienes cuenta?</p>
        <p class="underline text-indigo-800 dark:text-indigo-300">
          Regístrate aquí
        </p>
      </a>
    </div>
  </div>
</template>
