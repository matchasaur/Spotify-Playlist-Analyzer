<script lang="ts">
import { useAuthStore } from '@/stores/auth';
import { waitForDebugger } from 'inspector';


    export default {
        async mounted() {
            const clientId = import.meta.env.VITE_APP_SPOT_CLIENT_ID;
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");

                if (!code) {
                    this.$router.push('/error');
                } else {
                    const accessToken = await this.getAccessToken(clientId, code);
                    useAuthStore().setAccessToken(accessToken);
                    const temp = useAuthStore().getAccessToken;
                    this.$router.push('/dashboard');
                }
        },
        data() {
            return {
                token: null,
            }
        },
        methods: {
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
                return access_token;
            },
        }
    }
</script>

<template>
    <h1>hi</h1>
</template>@/stores/auth