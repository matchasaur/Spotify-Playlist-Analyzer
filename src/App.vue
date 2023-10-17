<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginButton from './components/LoginButton.vue';
import { useAuthStore } from './stores/auth';
</script>

<template>
  <v-app background-color="blue">
    <div style="background-color:#EEEEEE; min-height: 100vh;">
        <v-app-bar app class="w-50 text-center" style="left: 50%; margin-left: -25%; margin-top: 5dvh;" absolute
        color="purple-darken-3" rounded="xl" :elevation="10">
        <v-app-bar-title class="title">Datafy</v-app-bar-title>
        <login-button></login-button>
      </v-app-bar>
      <v-main>
        <RouterView></RouterView>
      </v-main>
    </div>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

.title {
  font-family: 'Bungee', sans-serif;
}
</style>