<script setup>
const props = defineEmits(['onClick'])
</script>

<template>
  <div class="dropdown">
    <button @click="$emit('onClick')">
      <img src="/src/assets/dropdown.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss">
button {
  background-color: transparent;
  border: none;
}
</style>
