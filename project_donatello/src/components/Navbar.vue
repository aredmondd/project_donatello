<template>
    <div class="navbar">
        <RouterLink to="/"><h1>Website Name</h1></RouterLink>
        <nav class="nav-links">
            <RouterLink to="/">Home</RouterLink> 
            <RouterLink to="/Backlog">Backlog</RouterLink> 
            <RouterLink to="/Finished">Completed</RouterLink> 
            <RouterLink to="/Dropped">Dropped</RouterLink> 
            <RouterLink to="/More">More</RouterLink> 
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
        font-family: 'Inter';
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .nav-links {
        display: flex;
    }

    .nav-links > .router-link-active {
        color: var(--red)
    }

    h1 {
        cursor: pointer;
        color: var(--red);
    }

</style>