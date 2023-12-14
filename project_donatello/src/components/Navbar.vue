<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/Backlog">Backlog</RouterLink> 
        <RouterLink to="/Finished">Completed</RouterLink> 
        <RouterLink to="/Dropped">Dropped</RouterLink> 
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

</style>