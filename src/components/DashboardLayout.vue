<script setup>
import { ref, onMounted } from "vue";
import FAB from "../components/FloatingActionButton.vue";
import NewEmailButton from "../components/NewEmailButton.vue";

const isButtonVisible = ref(true);

const checkButtonVisibility = () => {
  const button = document.getElementById("newButton"); // Reemplaza 'fab1' con el ID real del botón

  if (!button) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isButtonVisible.value = entry.isIntersecting;
    });
  });

  observer.observe(button);
};

// Al montar el componente, verificamos la visibilidad del botón
onMounted(() => {
  checkButtonVisibility();
});
</script>


<template>
  <div
    class="w-full h-full alt-background flex justify-center overflow-y-auto overflow-x-hidden"
  >
    <div
      class="flex flex-col items-start my-5 bg-slate-200 dark:bg-slate-900 rounded-lg mx-20 px-10 py-10 pt-5 backdrop-opacity-90 z-10 shadow-md h-full"
    >
      <!-- Botón Nuevo Email -->
      <NewEmailButton />
      <br />
      <!-- Sección Mis Plantillas -->
      <h2 class="font-bold">Mis plantillas</h2>
      <div class="divider" />
      <br />
      <div class="items-container">
        <div v-for="index in 15" :key="index">
          <div class="item">Ejemplo</div>
        </div>
      </div>
      <br />
      <!-- Sección Otras Plantillas -->
      <h2 class="font-bold">Otras plantillas</h2>
      <div class="divider" />
      <br />
      <div class="items-container">
        <div v-for="index in 10" :key="index">
          <div class="item">Ejemplo</div>
        </div>
      </div>
    </div>
    <!-- Floating Action Button -->
    <FAB v-if="!isButtonVisible"></FAB>
  </div>
</template>


<style scoped>
.divider {
  @apply bg-gradient-to-r from-slate-400 w-72 min-w-7 h-[2px];
}

.items-container {
  @apply grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7;
}

.item {
  @apply size-40 text-slate-600 bg-slate-300 flex content-center justify-center items-center;
}
.item:hover {
  @apply scale-110 z-40 shadow-md shadow-orange-300;
}
</style>