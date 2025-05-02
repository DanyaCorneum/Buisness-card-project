<script setup></script>

<template>
  <div class="about-services">
    <h1>Services</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam pariatur atque amet, alias
      ut id corrupti tempore similique cumque repellendus.
    </p>
    <button>Contact us</button>
  </div>
  <div class="services-slider"></div>
  <div class="stats"></div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;
.about-services {
  background-image: url('/src/assets/modern-blue-3840x2160-22197.jpg');
  color: $white;
  min-height: 30rem;
  padding: 1.5rem;
  button {
    background-color: $main;
    color: $white;
    padding: 1rem 2.5rem;
    text-transform: uppercase;
    transition: 50ms ease-in;
    &:hover {
      background-color: $dark;
    }
  }
}
</style>
