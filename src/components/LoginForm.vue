<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref(null);

const submitForm = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      error.value = "Usuario o contraseña incorrectos";
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();

    if (!data.token) {
      error.value = "Usuario o contraseña incorrectos";
    }

    localStorage.setItem("token", data.token);
    await store.dispatch("checkToken");
  } catch (error) {
    console.error(error);
    error.value = "Error al iniciar sesión";
  }
};
</script>

<template>
  <div
    class="w-full min-h-[calc(100vh-4rem)] background flex place-content-center place-items-center h-full"
  >
    <div class="loginContainer">
      <h1 class="mb-7 text-2xl font-bold">Inicia sesion</h1>
      <!-- Email -->
      <input
        id="email"
        class="custom-input"
        :class="error !== null ? 'custom-input-error' : 'custom-input'"
        type="email"
        v-model="email"
        placeholder="Correo electrónico"
      />
      <div class="py-2" />
      <!-- Contraseña -->
      <input
        id="password"
        :class="error !== null ? 'custom-input-error' : 'custom-input'"
        type="password"
        v-model="password"
        placeholder="Contraseña"
      />
      <!--Error-->
      <p v-if="error" class="pt-4 text-red-500">{{ error }}</p>
      <div class="py-2" />

      <button
        @click="submitForm"
        class="py-2 bg-indigo-600 text-indigo-50 font-bold rounded-md md:min-w-96"
      >
        Iniciar sesión
      </button>
      <div class="py-2" />
      <div
        class="rounded-md bg-indigo-100 px-6 w-[22rem] py-4 text-sm flex flex-col"
      >
        <div class="flex place-content-between">
          <p>¿Has olvidado tu contraseña?</p>
          <p class="textLink">¡Pincha aquí!</p>
        </div>
        <hr class="w-full my-2 border" />
        <div class="flex place-content-between">
          <p>¿Todavía no tienes cuenta?</p>
          <p @click="() => router.push('/register')" class="textLink">
            Registrarse
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  @apply flex flex-col p-11 my-12 rounded-2xl h-fit max-w-[57rem] bg-indigo-50 z-50 shadow-md place-content-center place-items-center;
}
</style>