<script setup>
import { ref } from "vue";

const props = defineProps({buttonText: {type:String, default:"Botón"}, isOpen: {type:Boolean, default:true} });
const buttonText = props.buttonText;
const isOpen = ref(props.isOpen);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="rounded-lg min-w-10 w-full max-w-[40rem] mb-4">
    <button
      type="button"
      :class="{
        'custom-button shadow-indigo-800 shadow-md': true,
      }"
      @click="toggleDropdown"
    >
      <p class="font-bold">{{ buttonText.toUpperCase() }}</p>
      <img
        src="@/assets/img/downArrow.png"
        :class="{
          '-rotate-90': !isOpen,
          'rotate-0': isOpen,
        }"
        class="flex size-5 filter ml-auto duration-300"
        alt="Flecha"
      />
    </button>

    <div :class="{ 'dropdown-content': !isOpen, 'active-dropdown': isOpen }">
      <div class="block px-2 py-2">
        <!-- Aquí puedes colocar el contenido específico del dropdown -->
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-content {
  @apply transition-opacity duration-500 overflow-hidden opacity-0 max-h-0 transform origin-top ;
}

.active-dropdown {
  @apply opacity-100 max-h-fit min-w-10 -mt-1 py-2 ; 
  transform: scaleY(1);
}

.custom-button {
  @apply flex items-center justify-center bg-gradient-to-t from-indigo-300 to-indigo-200 shadow-md p-2 rounded-lg w-full z-10 border border-indigo-900 hover:from-indigo-400 hover:to-indigo-200;
}
</style>