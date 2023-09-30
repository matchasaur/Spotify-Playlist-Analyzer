<template>
    <v-app>
    <v-container>
      <v-btn @click="getUserInfo()">Get User Info</v-btn>
      <v-btn @click="retrievePlaylists()">Get playlists</v-btn>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="selectedPlaylist"
            :items="playlists"
            label="Select a Playlist"
            item-text="name"
            item-value="id"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
    import { useAuthStore } from '@/stores/auth';
    import { useProfStore } from '@/stores/profile';
    export default {
        data() {
            return {
            playlists: [],
            selectedPlaylist: null,
            };
        },
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
                .then(response => response.json())
                .then(result => {
                    let doc = result.items
                    doc.forEach((item: any) => {
                        console.log(item);
                    });
                })
                .catch(error => console.log('error', error));
            },
        },
        Data: {
            result: null,
        }    
    }

</script>

@/stores/auth