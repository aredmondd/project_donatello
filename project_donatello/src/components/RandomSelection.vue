<template>
    <div class="container">
        <h1>Random Game Selection</h1>
        <div class="buttonList">
            <div class="button">All Games</div>
            <div class="button">Hype Games</div>
            <div class="button">Eh Games</div>
            <div class="button">Not Hype Games</div>
            <div class="button">Dropped Games</div>
            <div class="button">Emulated Games</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
    .container > h1 {
        font-family: 'DM Serif Display';
        color: var(--blue);
    }

    .buttonList {
        margin-top: 20px;
    }

    .button {
        background-color: var(--white);
        padding: 10px;
        border-radius: 8px;
        margin: 5px 150px 5px 150px;
        font-family: 'Inter';
        color: var(--grey);
        font-size: 25px;
        text-align: center;
        transition: all 0.25s ease-in;
        cursor: pointer;
    }

    .button:hover {
        background-color: var(--blue);
        padding: 20px;
        transition: all 0.2s ease-in;
        color: var(--white)
    }
</style>