<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const loginView = () => {
  router.push("/login");
};
const registerView = () => {
  router.push("/register");
};
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <div class="flex content-center items-center justify-center w-full">
        <p @click="loginView">Iniciar sesión</p>
      </div>
    </button>

    <div class="dropdown-content">
      <p class="text-sm cursor-default">
        ¿No tienes cuenta?
        <a
          @click="registerView"
          class="underline text-indigo-800 dark:text-indigo-300 cursor-pointer"
        >
          Regístrate aquí
        </a>
      </p>
    </div>
  </div>
</template>
