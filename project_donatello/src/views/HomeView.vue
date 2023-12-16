<template>
    <div>
        <h1>"Life is too short to play 7/10s"</h1>
        <div class="main">
            <div class="currentlyPlaying"> <CurrentlyPlaying /> </div>
            <div class="randomSelection"> <RandomSelection /> </div>
        </div>
    </div>
</template>

<script setup>
import CurrentlyPlaying from '../components/CurrentlyPlaying.vue'
import RandomSelection from '../components/RandomSelection.vue'
</script>

<style scoped>
    h1 {
        font-family: 'Inter';
        font-weight: 400;
        text-align: center;
        margin-top: 15px;
    }

    .main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 50px;
    }
</style>