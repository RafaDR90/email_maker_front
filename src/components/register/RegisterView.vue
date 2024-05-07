<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const error = ref(null);

const email = ref('');
const password = ref('');

const router = useRouter();

const registrarse = async () => {
  console.log('Registrarse');
};

</script>

<template>
  <div class="size-full background flex place-content-center place-items-center">
    <div class="loginContainer">
      <h1 class=" mb-10 text-2xl font-bold">Registrarse</h1>
      <!-- Email -->
      <input id="email" class="custom-input" type="email" :value="email" placeholder="Correo electrónico" />
      <div class="py-2" />
      <!-- Contraseña -->
      <input id="password" class="custom-input" type="password" :value="password" placeholder="Contraseña" />
      <!--Error-->
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <div class="py-2" />
      <button @click="registrarse" class="py-2 bg-indigo-600 text-indigo-50 font-bold rounded-sm md:min-w-96">
        Registrarse
      </button>
      <div class="py-2" />
      <div class="rounded-md bg-indigo-100 px-6 w-[22rem] py-4 text-sm flex flex-col mt-4">
        <div class="flex place-content-between">
          <p>¿Ya tienes cuenta?</p>
          <p class="textLink">¡Inicia sesión!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  @apply flex flex-col p-12 pb-10 my-12 rounded-2xl h-fit max-w-[57rem] bg-indigo-50 z-50 shadow-md place-content-center place-items-center;
}

.custom-input {
  @apply md:min-w-96 sm:overflow-auto caret-indigo-700;
}
</style>