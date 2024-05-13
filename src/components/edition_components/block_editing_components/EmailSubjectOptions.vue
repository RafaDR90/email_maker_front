<script setup>
import { ref, onMounted, defineEmits, defineProps, watch } from "vue";
import { underBannerTextVars } from "../../../store/UnderBannerText";
import { useEmailVars } from "../../../store/EmailVars";
import FontSelector from "./mini_components/FontSelector.vue";
import closeIcon from "../../../assets/img/x.png";

const underBannerTextStore = underBannerTextVars();
const emailVarsStore = useEmailVars();

const text = ref(emailVarsStore.emailSubject);
const selectedFont = ref(emailVarsStore.emailSubjectFont);
const availableFonts = ref(emailVarsStore.fonts || []);

let timeoutId = null;
watch(
  () => text.value,
  (newVal) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      emailVarsStore.setEmailSubject(newVal);
    }, 250);
  }
);

watch(emailVarsStore, () => {
  selectedFont.value = emailVarsStore.emailSubjectFont;
});
</script>

<template>
  <div class="blockEditItem">
    <h2>Asunto</h2>
    <div class="divider" />
    <h3>Texto:</h3>
    <div class="flex items-center w-full">
      <input
        type="text"
        class="custom-input text-sm"
        placeholder="Introduce asunto"
        v-model="text"
        onfocus="this.select()"
      />
      <button v-if="text" class="size-4 mx-2" @click="text = ''">
        <img :src="closeIcon" />
      </button>
      <div v-else class="size-4 mx-2"></div>
    </div>

    <!-- Font selector -->
    <h3>Fuente:</h3>
    <FontSelector
      :selectedFont="selectedFont"
      :fontsList="availableFonts"
      :updateFont="emailVarsStore.setEmailSubjectFont"
    />
  </div>
</template>
