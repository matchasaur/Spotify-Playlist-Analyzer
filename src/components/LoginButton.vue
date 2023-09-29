<script lang="ts">
    import { useAuthStore } from '@/stores/auth';

    export default {
        methods: {
            isAuthenticated() {
                return useAuthStore().isAuthenticated;
            },
            async loginSpotify() {
                const clientId = import.meta.env.VITE_APP_SPOT_CLIENT_ID; // Replace with your client id
                const params = new URLSearchParams(window.location.search);
                const code = params.get("code");

                if (!code) {
                    this.redirectToAuthCodeFlow(clientId);
                } else {
                    const accessToken = await this.getAccessToken(clientId, code);
                    useAuthStore().setAccessToken(accessToken);
                    const temp = useAuthStore().getAccessToken;
                    console.log(`temp: ${temp}`);
                }
            },
            async redirectToAuthCodeFlow(clientId:string): Promise<void> {
                const verifier = this.generateCodeVerifier(128);
                const challenge = await this.generateCodeChallenge(verifier);

                localStorage.setItem("verifier", verifier);

                const params = new URLSearchParams();
                params.append("client_id", clientId);
                params.append("response_type", "code");
                params.append("redirect_uri", "http://127.0.0.1:5173/callback");
                params.append("scope", "user-read-private user-read-email");
                params.append("code_challenge_method", "S256");
                params.append("code_challenge", challenge);

                document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
            },
            generateCodeVerifier(length:number) {
                let text = '';
                let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                for (let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            },
            async generateCodeChallenge(codeVerifier: string) {
                const data = new TextEncoder().encode(codeVerifier);
                const digest = await window.crypto.subtle.digest('SHA-256', data);
                return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=+$/, '');
            },
            async getAccessToken(clientId: string, code: string): Promise<string> {
                const verifier = localStorage.getItem("verifier");

                const params = new URLSearchParams();
                params.append("client_id", clientId);
                params.append("grant_type", "authorization_code");
                params.append("code", code);
                params.append("redirect_uri", "http://127.0.0.1:5173/callback");
                params.append("code_verifier", verifier!);

                const result = await fetch("https://accounts.spotify.com/api/token", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: params
                });

                const { access_token } = await result.json();
                useAuthStore().setAccessToken(access_token);
                const temp = useAuthStore().getAccessToken;
                console.log(`temp: ${temp}`);
                return access_token;
            },
        },
        data: () => ({
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }),
    }
</script>

<template>
    <template v-if="isAuthenticated() == true">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              My Account
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn @click="loginSpotify()">Log In</v-btn>
      </template>
</template>
