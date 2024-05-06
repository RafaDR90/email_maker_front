<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
    router.push('/');
  } catch (error) {
    console.error('Error:', error);
    error.value = 'Error al iniciar sesión';
  }
};
</script>

<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div v-if="error" class=" text-red-400 text-xs">{{ error }}</div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>