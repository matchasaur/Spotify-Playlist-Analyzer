<script lang="ts">
import LoginButton from '@/components/LoginButton.vue';

  
  export default {
    methods: {
        spotifyLogin() {
            const clientId: string = import.meta.env.VITE_APP_SPOT_CLIENT_ID;
            console.log(`clientID: ${clientId}`);
            //const redirectUri:string = 'https://spotify-analyst.web.app/callback';
            const redirectUri: string = 'http://127.0.0.1:5173/callback';
            const scopes: string = 'user-read-private user-read-email'; // Add necessary scopes
            const authUrl: string = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
            console.log(authUrl);
            // Redirect the user to Spotify for authentication
            window.location.href = authUrl;
        },
    },
    components: { LoginButton }
};

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar">
      <!-- <v-btn @click="spotifyLogin()">Log In</v-btn> -->
      <login-button></login-button>
    </v-app-bar>
  </v-layout>
</template>
