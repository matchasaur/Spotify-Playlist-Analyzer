<script lang="ts">

    export default {
        mounted() {
            const code:any = this.$route.query.code; // Get the code from the query parameters

            // Define your Spotify client ID and client secret
            const clientId = 'YOUR_CLIENT_ID';
            const clientSecret = 'YOUR_CLIENT_SECRET';
            const redirectUri = 'YOUR_REDIRECT_URI';

            // Create a base64-encoded string of your client ID and client secret
            const base64Credentials = btoa(`${clientId}:${clientSecret}`);

            // Define the data to be sent in the POST request
            const data = new URLSearchParams();
            data.append('grant_type', 'authorization_code');
            data.append('code', code);
            data.append('redirect_uri', redirectUri);

            // Define the headers for the POST request
            const headers = {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            };

            // Send the POST request using fetch
            fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: headers,
            body: data,
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to retrieve access token');
                }
                return response.json();
            })
            .then(data => {
                const accessToken = data.access_token;
                const expiresIn = data.expires_in;

                // Store the access token securely (e.g., in Vuex or localStorage)
                // Set an expiration time based on the 'expiresIn' value

                // Redirect to the desired route in your application
                // For example, you can redirect to the user's dashboard
                this.$router.push('/dashboard');
            })
            .catch(error => {console.error('Error exchanging code for access token:', error);
                // Handle errors, e.g., by displaying an error message to the user
            });
        },
    };
</script>

<template>
    <h1> Nuh uh </h1>
</template>