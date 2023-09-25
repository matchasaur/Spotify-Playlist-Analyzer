import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo4sCA-MPjrXbCSic0bA8uf3B3K5F_jsA",
    authDomain: "spotify-analyst.firebaseapp.com",
    projectId: "spotify-analyst",
    storageBucket: "spotify-analyst.appspot.com",
    messagingSenderId: "755610250805",
    appId: "1:755610250805:web:08dabd384bf9b6d3da8b7c",
    measurementId: "G-8JDJ1PBCT5"
  };

const taco = initializeApp(firebaseConfig);
const store = getFirestore(taco);
const storage = getStorage(taco);

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')

export { storage, store };