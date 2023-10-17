<template>
    <v-app>
    <div class="d-flex align-center flex-column" style="background-color: #EEEEEE;">
      <v-sheet class="w-75 h-screen" :elevation="24" color="grey-lighten-5" rounded="xl" style="padding: 1dvh; margin-top:10dvh">
        <h1>{{ SelectionID }}</h1>
        <v-btn class="w-50" @click="retrievePlaylistInfo()">Get Playlist Info</v-btn>
      </v-sheet>
        
    </div>
  </v-app>
</template>

<script lang="ts">
import ApiService from '@/services/ApiService';

export default {
    props: ['SelectionID'],
    methods: {
        async retrievePlaylistInfo() {

            const data = await ApiService.grabPlaylistInfo(this.SelectionID);
            console.log(data); //Remove this 
        },
    },
}
</script>