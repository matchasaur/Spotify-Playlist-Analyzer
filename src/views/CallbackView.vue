<script lang="ts">
    import axios from 'axios';

    export default {
        mounted() {
            const code = this.$route.query.code; // Get the code from the query parameters

            // Define your Spotify client ID and client secret
            const clientId = import.meta.env.VUE_APP_SPOT_CLIENT_ID;
            const clientSecret = import.meta.env.VUE_APP_SPOT_CLIENT_SECRET;
            const redirectUri = 'https://spotify-analyst.web.app/callback';

            // Create a base64-encoded string of your client ID and client secret
            const base64Credentials = btoa(`${clientId}:${clientSecret}`);

            // Define the data to be sent in the POST request
            const data:any = {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
            };

            // Define the headers for the POST request
            const headers = {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            };

            // Perform the POST request to exchange the code for an access token
            axios.post('https://accounts.spotify.com/api/token', new URLSearchParams(data), { headers })
            .then(response => {
                const accessToken = response.data.access_token;
                const expiresIn = response.data.expires_in;

                // Store the access token securely (e.g., in Vuex or localStorage)
                // Set an expiration time based on the 'expiresIn' value

                // Redirect to the desired route in your application
                // For example, you can redirect to the user's dashboard
                this.$router.push('/dashboard');
            })
            .catch(error => {
                console.error('Error exchanging code for access token:', error);
                // Handle errors, e.g., by displaying an error message to the user
            });
        },
    };
</script>

<template>
    <h1> Nuh uh </h1>
</template>