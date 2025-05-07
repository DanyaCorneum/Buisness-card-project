<script setup></script>

<template>
  <div class="footer">
    <h1>Just footer</h1>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;

.footer {
  background-color: $dark;
  padding: 5rem 20rem;
  text-align: center;
  h1 {
    color: $white;
  }
}
</style>
