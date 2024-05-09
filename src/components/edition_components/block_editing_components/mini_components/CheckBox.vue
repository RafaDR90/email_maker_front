<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  value: Boolean,
  valueUpdate: Function,
});

const value= ref(props.value);

const valueUpdate = () => {
  props.valueUpdate(value.value);
};

</script>

<template>
  <div class="w-full flex items-center  py-5 ml-2">
    <label for="checkbox" class="mr-2 text-lg font-semibold text-gray-800">Negrita</label>
    <input type="checkbox" id="checkbox" class="checkbox" v-model="value" @change="valueUpdate" />
  </div>
</template>

<style scoped>
.checkbox:checked {
  background-color: black;
}
.checkbox {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  outline: none;
}
.checkbox:checked {
  background: black;
}
.checkbox:checked:after {
  content: '';
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border: solid white;
  border-width: 0 0.155rem 0.155rem 0;
  margin: 0.25rem;
}
</style>