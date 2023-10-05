<template>
  <v-app>
    <div class="d-flex align-center flex-column" style="background-color: aqua;">
      <v-sheet class="w-75 h-screen" :elevation="24" color="green-lighten-3" rounded="xl" >
        <div class="d-flex align-center flex-column">
          <v-btn class="w-50" @click="getUserInfo()">Get User Info</v-btn>
          <v-btn class="w-50" @click="retrievePlaylists()">Get playlists</v-btn>
        </div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select :items="playlists" label="Select a Playlist" item-title="name" item-value="id"
              return-object></v-select>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </v-app>
</template>

<script lang="ts">
  import ApiService from '@/services/ApiService'
  import MainBody from '@/components/MainBody.vue';
  
  export default {
  data() {
      return {
      playlists: [] as { id: string; name: string; }[],
      };
  },
  methods: {
      async getUserInfo() {
          await ApiService.grabUser();
      },
      async retrievePlaylists(){
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
  }    
}

</script>

@/stores/auth