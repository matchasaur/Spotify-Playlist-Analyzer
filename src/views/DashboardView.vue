<template>
    <v-app>
    <v-container>
      <v-btn @click="getUserInfo()">Get User Info</v-btn>
      <v-btn @click="retrievePlaylists()">Get playlists</v-btn>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            :items="playlists"
            label="Select a Playlist"
            item-text="name"
            item-value="id"
            return-object
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
  import ApiService from '@/services/ApiService'

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
          // .then(response => response.json())
          // .then(result => {
          //   return result;
          // })
          // .catch(error=> console.log('error', error));
          console.log(data);

          data.items.forEach((item: any) => {
            let temp = {
              name: item.name,
              id: item.id,
            };
            this.playlists.push(temp);
          });
          console.log(this.playlists);
      },
  },
  Data: {
      result: null,
  }    
}

</script>

@/stores/auth