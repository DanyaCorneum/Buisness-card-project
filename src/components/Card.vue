<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps(['class'])
</script>

<template>
  <div :class="`card ${props.class}`">
    <slot name="img">
      <img :src="props.img" alt="" />
    </slot>
    <h1>
      <slot name="header"> name </slot>
    </h1>
    <p>
      <slot name="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni est accusamus at
        illum adipisci!
      </slot>
    </p>
    <slot name="button">
      <button>more</button>
    </slot>
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
  border: 4px solid $white;
  border-radius: 30px;
  color: $white;
  box-shadow: 0 0 40px $white;
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
    height: 350px;
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
