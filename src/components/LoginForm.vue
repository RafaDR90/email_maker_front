<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const email = ref('');
const password = ref('');
const router = useRouter();
const error = ref(null);

const submitForm = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    if (!response.ok) {
      error.value = 'Usuario o contraseña incorrectos'
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    await store.dispatch('checkToken');
  } catch (error) {
    console.error('Error:', error);
    error.value = 'Error al iniciar sesión';
  }
};
</script>

<template>
  <div class=" w-full min-h-[calc(100vh-4rem)] background flex place-content-center place-items-center h-full">
    <div class="loginContainer">
      
      <!-- Email -->
      <input id="email" class="custom-input" type="email" v-model="email" placeholder="Correo electrónico" />
      <div class="py-2" />
      <!-- Contraseña -->
      <input id="password" class="custom-input" type="password" v-model="password" placeholder="Contraseña" />
      <!--Error-->
      <p class="text-red-500">{{ error }}</p>
      <div class="py-2" />
      
      <button @click="submitForm" class="py-2 bg-indigo-600 text-indigo-50 font-bold rounded-sm md:min-w-96">
        Iniciar sesión
      </button>
      <div class="py-2" />
      <div class="rounded-md bg-indigo-100 px-6 w-[22rem] py-4 text-sm flex flex-col">
        <div class="flex place-content-between">
          <p>¿Has olvidado tu contraseña?</p>
          <p class="textLink">¡Pincha aquí!</p>
        </div>
        <hr class="w-full my-2 border" />
        <div class="flex place-content-between">
          <p>¿Todavía no tienes cuenta?</p>
          <p class="textLink">Registrarse</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  @apply flex flex-col p-12 my-12 rounded-2xl h-fit max-w-[57rem] bg-indigo-50 z-50 shadow-md place-content-center place-items-center;
}

.custom-input {
  @apply md:min-w-96 sm:overflow-auto;
}
</style>