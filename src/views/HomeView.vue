<script lang="ts">
import LoginButton from '@/components/LoginButton.vue';
import LoginBar from '@/components/LoginBar.vue';

export default {
    methods: {
    },
    components: { LoginButton, LoginBar,}
};

</script>

<template>
    <div class="d-flex justify-center" style="margin-top: 10dvh;">
        <v-card color="deep-purple-lighten-3" theme="dark" class="w-75 align-center" height="500" rounded="xl" elevation="24">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-subtitle style="margin-top: 20px;">Ellie Goulding</v-card-subtitle>
                    <v-card-title  class="text-h1">
                        Datafy
                    </v-card-title>
                    <v-card-actions>
                        <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                    </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </div>
</template>
