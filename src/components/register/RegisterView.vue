<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { BASE_URL } from '../../api/ApiConstants';

const store = useStore();

const error = ref(null);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const nombre = ref('');
const errorNum = ref(0);

const router = useRouter();

const registrarse = async () => {
  if (!email.value || !password.value || !nombre.value || !confirmPassword.value) {
    error.value = 'Por favor, rellena todos los campos';
    errorNum.value=(1);
    return;
  }
  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres';
    errorNum.value=(2);
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden';
    errorNum.value=(2);
    return;
  }

  try {

    const response = await fetch(BASE_URL+'api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nombre.value,
          email: email.value,
          password: password.value,
          password_confirmation: confirmPassword.value
        })
      }
    );
    if (!response.ok) {
      error.value = 'Error al registrarse';
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    if(responseData.err){
      
    errorNum.value=(3);
      error.value = responseData.err;
      return;
    }
    router.push('/login');
  } catch (error) {

    console.error('Error:', error);
    error.value = 'Error al registrarse';
  }
};

</script>

<template>
  <div class=" w-full min-h-[calc(100vh-4rem)] background flex place-content-center place-items-center h-full">
    <div class="loginContainer">
      <h1 class=" mb-10 text-2xl font-bold">Registrarse</h1>
      <!-- Nombre -->
      <input type="text" :class="errorNum === 1 ? 'custom-input-error' : 'custom-input'" v-model="nombre" placeholder="Nombre">
      <div class="py-2" />
      <!-- Email -->
      <input id="email" :class="errorNum === 1 || errorNum===3 ? 'custom-input-error' : 'custom-input'" type="email" v-model="email" placeholder="Correo electrónico" />
      <div class="py-2" />
      <!-- Contraseña -->
      <input id="password" :class="errorNum === 1 || errorNum ===2 ? 'custom-input-error' : 'custom-input'" type="password" v-model="password" placeholder="Contraseña" />
      <div class="py-2" />
      <!-- Confirmar contraseña -->
      <input id="confirmPassword"  :class="errorNum === 1 || errorNum ===2 ? 'custom-input-error' : 'custom-input'" type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" />
      <div class="py-2" />
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
          <p @click="()=> router.push('/login')" class="textLink">¡Inicia sesión!</p>
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

<!--  DEBUG
  --  Supuesta implementación de register con axios:  --


const registrarse = async () => {
  // Comprobación de campos vacíos
  if (!email.value || !password.value || !nombre.value || !confirmPassword.value) {
    error.value = 'Por favor, rellena todos los campos';
    errorNum.value = 1;
    return;
  }
  
  // Comprobación de longitud mínima de contraseña
  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres';
    errorNum.value = 2;
    return;
  }
  
  // Comprobación de coincidencia de contraseñas
  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden';
    errorNum.value = 2;
    return;
  }

  // Llamar al método register de AuthService
  try {
    const data = await AuthService.register(
      nombre.value,
      email.value,
      password.value,
      confirmPassword.value
    );
    // Realizar acciones adicionales después del registro, como redireccionar a otra página
  } catch (error) {
    console.error('Error al registrarse:', error.message);
    error.value = error.message || 'Error al registrarse';
  }
};

-->