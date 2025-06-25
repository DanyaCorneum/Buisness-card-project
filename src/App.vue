<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <body>
    <NavBar />
    <RouterView />
    <Footer />
  </body>
</template>

<style lang="scss"></style>
