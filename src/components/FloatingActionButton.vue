<script setup>
import { ref, onMounted } from "vue";
import newEmailIcon from "../assets/img/newButton.png";

const fab1 = ref(null);
const innerFabs = ref(null);

const newEmail = () => {
  console.log("New Email pulsado");
};
</script>

<template>
  <div class="inner-fabs">
    <div id="fab1" class="fab round" @click="newEmail">
      <div class="size-7">
        <img :src="newEmailIcon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.round {
  border-radius: 100%;
}

.fab {
  z-index: 50;
  transition: all 300ms ease-in-out;
  width: 72px;
  height: 72px;
  background-color: #8340ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Cambiar a posición fija */
  right: 30px;
  user-select: none;
  cursor: pointer;
  color: white;
  font-size: 2em;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16), 0px 3px 10px rgba(0, 0, 0, 0.16);
}

.fab:hover {
  scale: 110%;
  background-color: #6527d8;
}

.inner-fabs .fab {
  width: 60px;
  height: 60px;
  right: 24px;
  bottom: 23px;
  font-size: 1.5em;
  will-change: bottom;
}

/* from 0 through ${number of inner fabs} */
.inner-fabs.show .fab {
  bottom: 80px;
}
</style>