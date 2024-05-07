<script setup>
import { ref } from "vue";

const url = ref("");
</script>

<template>
  <div class="size-full flex flex-col place-items-center p-4">
    <h2 class="font-bold">Banner</h2>
    <div class="divider" />
    <p class="input-title">Url de la imagen:</p>
    <input class="custom-input text-sm" v-model="url" />
  </div>
</template>

<style scoped>
.divider {
  @apply bg-slate-400 w-[91%] min-w-7 h-[1px] opacity-75 z-0;
}

.input-title {
  @apply mt-4 mb-2 self-start text-sm font-semibold;
}
</style>