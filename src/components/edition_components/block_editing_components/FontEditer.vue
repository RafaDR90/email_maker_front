<script setup>
import { ref, onMounted } from "vue";
import NumberInput from "./mini_components/NumberInput.vue";

const text = ref("");
const selectedFont = ref("");
const availableFonts = ref([]);
const fontSize=ref(12);

// Función para obtener las fuentes disponibles desde CSS
const getAvailableFonts = () => {
  const styleSheets = document.styleSheets;
  const fontFamilies = new Set();

  // Iterar sobre todas las hojas de estilo para buscar las fuentes utilizadas
  for (const styleSheet of styleSheets) {
    try {
      const rules = styleSheet.cssRules || styleSheet.rules;
      if (!rules) continue;

      for (const rule of rules) {
        if (rule instanceof CSSFontFaceRule) {
          fontFamilies.add(rule.style.fontFamily);
        }
      }
    } catch (error) {
      console.error("Error al acceder a las reglas de CSS:", error);
    }
  }

  // Convertir el conjunto de fuentes a un array y ordenarlo alfabéticamente
  availableFonts.value = Array.from(fontFamilies).sort();
};

// Llamar a la función para obtener las fuentes disponibles cuando el componente está montado
onMounted(() => {
  getAvailableFonts();
});
</script>

<template>
  <div class="size-full flex flex-col place-items-start p-4">
    <h2 class="font-bold">Texto</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Texto:</h3>
    <textarea
      class="custom-input text-sm mb-4 max-h-36 min-h-9"
      placeholder="Introduce texto"
      v-model="text"
    />

    <!-- Font selector -->
    <h3>Fuente:</h3>
    <div class="min-w-full">
      <select id="fontSelect" class="custom-input" v-model="selectedFont">
        <option
          v-for="(font, index) in availableFonts"
          :key="index"
          :value="font"
        >
          {{ font }}
        </option>
      </select>
    </div>

    <!-- Font size -->
    <h3>Tamaño de la fuente:</h3>
    <NumberInput />

    <!-- Altura -->
    <h3>Altura:</h3>
    <input
      class="custom-input text-sm mb-4"
      placeholder="Introduce texto"
      v-model="text"
    />
  </div>
</template>

<style scoped>
</style>