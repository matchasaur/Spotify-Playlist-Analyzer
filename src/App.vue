<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginButton from './components/LoginButton.vue';
import { useAuthStore } from './stores/auth';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="app-bar" color="surface-variant" title="Application bar" rounded>
      <!-- <v-btn @click="spotifyLogin()">Log In</v-btn> -->
      <login-button></login-button>
    </v-app-bar>
  </v-layout>
  <RouterView />
</template>

<style scoped>
.app-bar {
  margin-top: 20px;
  max-width: 75%;
  display: flex;
}

</style>