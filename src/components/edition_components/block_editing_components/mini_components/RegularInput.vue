<script setup>
import {ref, defineProps} from 'vue';
import closeIcon from "../../../../assets/img/x.png";

const props = defineProps({
    text : {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: "Introduce texto"
    },
});

const userText = ref(props.text);
const userPlaceholder = ref(props.placeholder);
</script>

<template>
  <div class="flex items-center w-full">
    <input
      type="text"
      class="custom-input text-sm"
      :placeholder="userPlaceholder"
      v-model="userText"
      onfocus="this.select()"
    />
    <button v-if="userText" class="size-4 mx-2" @click="userText = ''">
      <img :src="closeIcon" />
    </button>
    <div v-else class="size-4 mx-2"></div>
  </div>
</template>