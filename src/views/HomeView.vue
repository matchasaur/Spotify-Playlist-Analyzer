<script lang="ts">
  
  export default {
    methods: {
      spotifyLogin() {
        const clientId = import.meta.env.VUE_APP_SPOT_CLIENT_ID;
        const redirectUri = 'https://spotify-analyst.web.app/callback';
        const scopes = 'user-read-private user-read-email'; // Add necessary scopes

        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;

        // Redirect the user to Spotify for authentication
        window.location.href = authUrl;
      },
    },
  };

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar">
      <v-btn @click="spotifyLogin()">Log In</v-btn>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Drawer left"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template>
