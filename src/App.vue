<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginButton from './components/LoginButton.vue';
import { useAuthStore } from './stores/auth';
</script>

<template>
  <v-app>
    <v-row no-gutters style="height: 15%; flex: initial">
      <v-col>
        <v-app-bar app class="w-50" style="left: 50%; margin-left: -25%; margin-top: 5dvh;" absolute color="surface-variant" title="Application bar" rounded="xl" :elevation="10">
        <login-button></login-button>
        </v-app-bar>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-main>
            <RouterView></RouterView>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}
</style>