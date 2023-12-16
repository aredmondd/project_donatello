import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


const apiUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/";
const apiKey = "79D100490C0272E9D7AD3FC00611CA5F";
const steamId = "76561198854416655";
const format = "json";

const url = `${apiUrl}?key=${apiKey}&steamid=${steamId}&format=${format}`;

fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    // Handle the JSON response data here
    console.log(data);
    })
    .catch(error => {
    // Handle errors here
    console.error("Fetch error:", error);
    });
