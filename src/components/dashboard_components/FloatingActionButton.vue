<script setup>
import { ref } from "vue";
import newEmailIcon from "../../assets/img/newButton.png";

const newEmail = () => {
  console.log("New Email pulsado");
};

const showTooltip = ref(false);
</script>

<template>
  <div class="inner-fabs">
    <div
      id="fab1"
      class="fab round"
      @click="newEmail"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <div v-if="showTooltip" class="tooltip">Nuevo email</div>
      <div class="size-7">
        <img :src="newEmailIcon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.round {
  @apply rounded-full;
}
.fab {
  @apply z-50 transition-all duration-300 ease-[ease-in-out] w-[72px] h-[72px] bg-orange-600 hover:bg-orange-500 flex items-center justify-center fixed select-none cursor-pointer text-[white] text-[2em] shadow-[0px_3px_10px_rgba(0,0,0,0.16),0px_3px_10px_rgba(0,0,0,0.16)] right-[30px] hover:scale-110;
}

.inner-fabs {
  opacity: 0; /* Inicialmente oculto */
}

.inner-fabs-enter {
  @apply transition-opacity opacity-100 duration-500 ease-linear;
}

.inner-fabs .fab {
  @apply w-[60px] h-[60px] right-0 bottom-[23px];
}

.inner-fabs.show .fab {
  @apply bottom-20;
}

.tooltip {
  @apply absolute text-white text-xs bg-orange-950 py-1 px-3 rounded-md right-20 opacity-0 pointer-events-none transition-opacity duration-300;
}

.fab:hover .tooltip {
  @apply opacity-100;
}
</style>