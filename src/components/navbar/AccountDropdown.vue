<script setup>
import iconoPerfil from "../../assets/img/usuario.png";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const closeSession = () => {
  router
    .push("/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      localStorage.removeItem("token");
      store.commit("clearAuthUser");
      router.push("/login");
    });
};
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <div class="flex content-center items-center justify-center w-full">
        <p v-if="store.state.AuthUser">{{ store.state.AuthUser.email }}</p>
        <div class="size-4 ml-2">
          <img :src="iconoPerfil" class="filter invert dark:invert-0" />
        </div>
      </div>
    </button>
    <div v-if="store.state.AuthUser" class="dropdown-content">
      <p @click="closeSession">Cerrar sesión</p>
    </div>
  </div>
</template>