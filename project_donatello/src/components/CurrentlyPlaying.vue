<template>
    <div class="container">
        <h1>What I'm Playing</h1>
        <div class="gamesList">
            <div class="game" v-for="game in games" :key="game.id">
                <h3>{{ game.name }}</h3>
                <p>Started: {{ game.date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const games = ref([
    { name: 'Paper Mario & The Thousand Year Door',
      date: '12/13/23'
    },
    { name: 'Dandara',
      date: '12/09/23'
    },
    { name: 'We Love Katamari',
      date: '12/16/23'
    },
    
]) 

</script>

<style scoped>
    /* .container {
        border: 2px solid var(--white);
        margin: 3px;
    } */

    .container > h1 {
        font-family: 'DM Serif Display';
        color: var(--blue);
    }

    .gamesList {
        margin-top: 20px;
    }

    .game {
        background-color: var(--white);
        padding: 20px;
        border-radius: 8px;
        margin: 5px 100px 5px 100px;
        transition: all 0.2s ease-in-out;
    }

    .game > h3 {
        font-family: 'DM Serif Display';
        color: var(--red);
        font-size: 25px;
    }

    .game > p {
        font-family: 'Inter';
        color: var(--grey);
        font-size: 15px;
    }

    .game:hover {
        transition: all 0.1s ease-in-out;
        margin: 5px 90px 5px 90px;
    }
</style>