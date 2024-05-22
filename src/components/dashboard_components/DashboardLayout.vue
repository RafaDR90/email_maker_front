<script setup>
import { ref, onMounted, watch } from "vue";
import FAB from "./FloatingActionButton.vue";
import NewEmailButton from "./NewEmailButton.vue";
import TemplatesCard from "./TemplatesCard.vue";
import { BASE_URL } from "../../api/ApiConstants";
import { documentActions } from "../../store/DocumentActions";

const documentActionsStore = documentActions();

const isButtonVisible = ref(true);
const templates = ref([]);
const getTemplates = async () => {
  const response = await fetch(BASE_URL+"api/get-templates", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  templates.value = data;
};


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

const deletedTemplate = (name) => {
  getTemplates();
  documentActionsStore.setExito(`Plantilla ${name} eliminada con éxito`);
};

// Al montar el componente, verificamos la visibilidad del botón
onMounted(() => {
  checkButtonVisibility();
  //obtiene templates
  getTemplates();
});
</script>

<template>
      <p v-if="documentActionsStore.exito" class=" w-full bg-green-200 border-y-4 border-green-500 py-4 text-green-700 font-bold text-center text-xl">{{documentActionsStore.exito}}</p>

  <div class="w-full h-[calc(100vh-4rem)] alt-background flex justify-center overflow-y-auto overflow-x-hidden">
    <div
      class="  flex flex-col items-start my-5 bg-slate-200 dark:bg-slate-900 rounded-lg mx-20 px-10 py-10 pt-5 backdrop-opacity-90 z-0 shadow-md h-max w-full ">
      <!-- Botón Nuevo Email -->
      <NewEmailButton />
      <br />
      <!-- Sección Mis Plantillas -->
      <h2 class="self-start">Mis plantillas</h2>
      <div class="divider" />
      <br />
      <div class="w-full">
        <TemplatesCard v-if="templates" :items="templates" @delete="deletedTemplate" />
      </div>
    </div>
    <!-- Floating Action Button -->
    <FAB v-if="!isButtonVisible" :class="{ 'show-animation': !isButtonVisible }"></FAB>
  </div>
</template>


<style scoped>
/* Agrega la animación de aparición */
.show-animation {
  z-index: 40;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  /* Mantener el estado final después de que termine la animación */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.divider {
  @apply bg-gradient-to-l self-start from-slate-400 w-72 min-w-7 h-[2px];
}

.items-container {
  @apply grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7;
}

.item {
  @apply size-40 transition-all duration-150 ease-in-out text-slate-600 bg-slate-300 flex content-center justify-center items-center;
}

.item:hover {
  @apply scale-110 z-40 shadow-md shadow-orange-300;
}
</style>