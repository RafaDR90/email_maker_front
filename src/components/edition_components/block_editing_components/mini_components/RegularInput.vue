<script setup>
import {ref, defineProps, watch} from 'vue';
import closeIcon from "../../../../assets/img/x.png";


const props = defineProps({
    textList : {
        type: Object,
        default: {}
    },
    onChange : {
        type:Function,
        default: () => {}
    }
});

const model = defineModel();

const userPlaceholder = ref(props.placeholder);

const title = ref(props.textList.title || "");

let timeoutId = null;
watch(title,
  (newValue) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      props.onChange(newValue);
    }, 250);
  }
);

</script>

<template>
  <div class="flex items-center w-full">
    <input
      type="text"
      class="custom-input text-sm"
      :placeholder="textList[1] || ' '"
      v-model="title"
      onfocus="this.select()"
    />
    <button v-if="title" class="size-4 mx-2" @click="title = ''">
      <img :src="closeIcon" />
    </button>
    <div v-else class="size-4 mx-2"></div>
  </div>
</template>