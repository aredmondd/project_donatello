<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="app">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style scoped>
</style>
