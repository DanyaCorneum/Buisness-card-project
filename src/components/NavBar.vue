<script setup>
import NavButton from './NavButton.vue'
</script>

<template>
  <div class="nav-bar">
    <img
      src="https://i.pinimg.com/736x/94/e2/7b/94e27b9af7ab8c18e9af0338e2362228.jpg"
      alt=""
      class="nav-bar__icon"
    />
    <div class="nav-bar__inner">
      <NavButton :link="`/`">Home</NavButton>
      <NavButton :link="`/`">Services</NavButton>
      <NavButton :link="`/`">Feature</NavButton>
      <NavButton :link="`/`">Product</NavButton>
      <NavButton :link="`/`">FAQ</NavButton>
    </div>
  </div>
</template>

<style lang="scss"></style>
