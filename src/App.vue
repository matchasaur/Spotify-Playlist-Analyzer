<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginButton from './components/LoginButton.vue';
import { useAuthStore } from './stores/auth';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar">
      <!-- <v-btn @click="spotifyLogin()">Log In</v-btn> -->
      <login-button></login-button>
    </v-app-bar>
  </v-layout>
  <RouterView />
</template>