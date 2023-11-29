<script setup>
import Navbar from './components/_Navbar.vue'
</script>

<template>
    <Navbar />
    <router-view></router-view>
</template>

<style lang="scss">
    //Global Styles
    * {
        box-sizing: border-box;
    }
</style>
