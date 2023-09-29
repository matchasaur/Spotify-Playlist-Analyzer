<template>
    <v-btn @click="getUserInfo()">Get User Info</v-btn>
    <v-btn @click="retrievePlaylists()">Get playlists</v-btn>
</template>

<script lang="ts">
    import { useAuthStore } from '@/stores/auth';
    import { useProfStore } from '@/stores/profile';
    export default {
        methods: {
            getUserInfo() {
                let myHeaders:any = new Headers();
                const accessToken = useAuthStore().getAccessToken;

                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                var requestOptions:Object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("https://api.spotify.com/v1/me", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    useProfStore().setUserID(result.id);
                })
                .catch(error => console.log('error', error));
            },
            retrievePlaylists(){
                let myHeaders:any = new Headers();
                const accessToken = useAuthStore().getAccessToken;
                let user_id = useProfStore().getUserID;

                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                var requestOptions:Object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            },
        },
        Data: {
            result: null,
        }    
    }

</script>

@/stores/auth