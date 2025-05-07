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
  justify-content: center;
  padding: 20px;
  text-align: center;
  border: 2px solid $white;
  border-radius: 30px;
  color: $white;
  box-shadow: 0 0 20px white;
  h1 {
    text-align: start;
    text-transform: uppercase;
  }
  p {
    text-align: start;
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
    // &:hover {
    //   display: none;
    // }
  }
}
</style>
