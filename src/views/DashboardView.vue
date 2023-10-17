<template>
  <v-app>
    <div class="d-flex align-center flex-column" style="background-color: #EEEEEE;">
      <v-sheet class="w-75 h-screen" :elevation="24" color="grey-lighten-5" rounded="xl" style="padding: 1dvh; margin-top:10dvh">
        <v-btn class="w-50" @click="getUserInfo()">Get User Info</v-btn>
        <v-btn class="w-50" @click="retrievePlaylists()">Get playlists</v-btn>

        <v-select :items="playlists" label="Select a Playlist" item-title="name" item-value="id"
          return-object></v-select>
      </v-sheet>
    </div>
  </v-app>
</template>

<script lang="ts">
import ApiService from '@/services/ApiService'



export default {
    data() {
        return {
            playlists: [] as {
                id: string;
                name: string;
            }[],
        };
    },
    mounted() {
        this.getUserInfo();
        this.retrievePlaylists();
    },
    methods: {
        async getUserInfo() {
            await ApiService.grabUser();
        },
        async retrievePlaylists() {
            const data = await ApiService.grabPlaylists();
            console.log(data); //Remove this 
            data.items.forEach((item: any) => {
                let temp = {
                    name: item.name,
                    id: item.id,
                };
                this.playlists.push(temp);
            });
            console.log(this.playlists); //Remove this
        },
    },
    Data: {
        result: null,
    },
}

</script>

@/stores/auth