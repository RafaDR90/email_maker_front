<script setup>
import { ref, defineProps, watch } from "vue";
import closeIcon from "../../../../assets/img/x.png";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  onChange: {
    type: Function,
    default: () => {},
  },
});

const userPlaceholder = ref(props.placeholder);
const title = ref(props.text);
watch(props, () => {
  title.value = props.text;
});
let timeoutId = null;
watch(title, (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.onChange(newValue);
  }, 250);
});
</script>

<template>
  <div class="flex items-center w-full">
    <input
      type="text"
      class="custom-input text-sm"
      :placeholder="userPlaceholder || ' '"
      v-model="title"
      onfocus="this.select()"
    />
    <button v-if="title" class="size-4 mx-2" @click="title = ''">
      <img :src="closeIcon" />
    </button>
    <div v-else class="size-4 mx-2"></div>
  </div>
</template>