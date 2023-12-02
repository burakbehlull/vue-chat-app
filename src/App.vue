<script setup>
import Navbar from './components/_Navbar.vue'

</script>

<template>
    <div class="w-full p-6">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<style>
@import './index.css';
</style>
