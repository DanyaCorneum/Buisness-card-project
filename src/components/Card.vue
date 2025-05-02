<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps(['class', 'name', 'img', 'btn'])
</script>

<template>
  <div :class="`card ${props.class}`">
    <img :src="props.img" alt="" />
    <h1>{{ props.name }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni est accusamus at illum
      adipisci!
    </p>
    <button>{{ props.btn }}</button>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 5px solid $white;
  border-radius: 30px;
  color: $white;
  padding-bottom: 10px;
  h1 {
    text-transform: uppercase;
  }
  img {
    border-radius: 30px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  button {
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    color: $white;
    text-transform: uppercase;
    background-color: $dark-accent;
    border-radius: 15px;
    &:hover {
      cursor: pointer;
      background-color: darken($dark-accent, 20%); /* Затемнение исходного цвета */
    }
  }
}
</style>
