<template>
    <div class="navbar">
        <RouterLink to="/"><h1>Website Name</h1></RouterLink>
        <nav class="nav-links highlights">
            <RouterLink to="/">Home</RouterLink> 
            <RouterLink to="/Backlog">Backlog</RouterLink> 
            <RouterLink to="/Finished">Completed</RouterLink> 
            <RouterLink to="/Dropped">Dropped</RouterLink> 
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
    * {
        font-family: 'DM Serif Display'
    }
    a {
        text-decoration: none;
        margin-right: 10px;
        color: var(--white);
        box-shadow: inset 0 0 0 0 var(--electric-purple);
        font-family: 'Inter';
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        padding: 10px;
    }

    .nav-links {
        display: flex;
    }

    .nav-links > .router-link-active {
        color: var(--electric-purple)
    }

    h1 {
        cursor: pointer;
    }

</style>