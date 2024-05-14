<script setup>
import { ref } from "vue";


const props = defineProps(["buttonText"]);
const buttonText = props.buttonText;
const isOpen = ref(true);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="rounded-lg min-w-10 w-[95%] max-w-[40rem]">
        <button type="button" :class="{
            'custom-button shadow-slate-800 shadow-md': true,
            'hover:motion-safe:animate-bounce': !isOpen,
        }" @click="toggleDropdown">
            <p>{{ buttonText.toUpperCase() }}</p>
            <img src="@/assets/img/downArrow.png"
                class="flex size-5 filter  ml-auto hover:animate-spin duration-200" alt="Flecha" />
        </button>

        <div :class="{ 'dropdown-content': !isOpen, 'active': isOpen }">
            <div class="block px-4 py-2">
                <!-- Aquí puedes colocar el contenido específico del dropdown -->
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown-content {
    @apply transition-opacity duration-500 overflow-hidden opacity-0 max-h-0 transform origin-top;
}

.active {
    @apply opacity-100 max-h-fit min-w-10 -mt-1 py-2 ;
    transform: scaleY(1);
}

.custom-button {
    @apply flex items-center justify-center bg-gradient-to-l from-blue-100 to-blue-200 shadow-md text-black p-2 rounded-lg w-full z-10;
}
</style>