<script setup>
import { ref, onMounted, defineEmits, defineProps, watch } from "vue";
import Slider from "./mini_components/Slider.vue";
import NumberInput from "./mini_components/NumberInput.vue";
import { underBannerTextVars } from "../../../store/UnderBannerText";
import ColorPicker from "./mini_components/ColorPicker.vue";
import CheckBox from "./mini_components/CheckBox.vue";

const underBannerTextStore = underBannerTextVars();

const emits = defineEmits([
  "update:fontSize",
  "update:fontSelected",
]);

const props = defineProps({
  underBannerText: String,
  underBannerSelectedFont: Object,
});
const text = ref(underBannerTextStore.text);
const selectedFont = ref(props.underBannerSelectedFont);
const availableFonts = ref([]);
const textHeight = ref(underBannerTextStore.height || 43);
const fontWeight = ref(underBannerTextStore.weight || 200);

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
          const fontFamily = rule.style.fontFamily;
          const fontSrc = rule.style.src;
          const fontWeight = rule.style.fontWeight;
          const fontStyle = rule.style.fontStyle;

          fontFamilies.add({ fontFamily, fontSrc, fontWeight, fontStyle });
        }
      }
    } catch (error) {
      console.error("Error al acceder a las reglas de CSS:", error);
    }
  }

  // Convertir el conjunto de fuentes a un array y ordenarlo alfabéticamente
  availableFonts.value = Array.from(fontFamilies).sort((a, b) =>
    a.fontFamily.localeCompare(b.fontFamily)
  );
};

// Llamar a la función para obtener las fuentes disponibles cuando el componente está montado
onMounted(() => {
  getAvailableFonts();
});






function handleSelectedFont(selectedFont) {
  emits("update:fontSelected", selectedFont);
}



let timeoutId = null;
watch(() => text.value, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    underBannerTextStore.setText(newVal);
  }, 250);
});
</script>

<template>
  <div class="blockEditItem">
    <h2>Texto</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Texto:</h3>
    <textarea class="custom-input text-sm max-h-36 min-h-9" placeholder="Introduce texto" v-model="text" />

    <!-- Font selector -->
    <h3>Fuente:</h3>
    <div class="w-full">
      <select id="fontSelect" class="custom-input text-sm" v-model="selectedFont"
        @change="handleSelectedFont(selectedFont)">
        <option v-for="(font, index) in availableFonts" :key="index" :value="font">
          {{ font.fontFamily }}
        </option>
      </select>
    </div>

    <!-- Font size -->
    <h3>Tamaño de la fuente:</h3>
    <NumberInput class="w-fit" :value="underBannerTextStore.fontSize" :valueUpdate="underBannerTextStore.setFontSize" />

    <!-- Intensidad de la fuente -->
    <CheckBox class="mb-4" :value="fontWeight" :valueUpdate="underBannerTextStore.setWeight" />


    <!-- Altura -->
    <h3>Altura:</h3>
    <NumberInput class="w-fit" :value="textHeight" :valueUpdate="underBannerTextStore.setHeight" />

    <h3>Color:</h3>
    <ColorPicker class="mb-4 h-fit" :value="underBannerTextStore.color" :valueUpdate="underBannerTextStore.setColor" />


    <h3>Color de fondo</h3>
    <ColorPicker class="mb-4 h-fit" :value="underBannerTextStore.bgColor"
      :valueUpdate="underBannerTextStore.setBgColor" />
  </div>
</template>
