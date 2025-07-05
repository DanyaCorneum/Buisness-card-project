<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <button @click="open = true">Open modal window</button>
  <Teleport to="body">
    <transition name="slide-left">
      <div v-if="open" class="modal-window" @click="open = false">
        <p>Modal window</p>
      </div>
    </transition>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '/src/assets/main' as *;
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 200ms linear;
}

.slide-left-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

button {
  background-color: $accent;
  max-width: 250px;
  border-radius: 10px;
  padding: 10px 30px;
  color: $white;
  transition: 200ms ease;
  &:hover {
    background-color: $dark-accent;
  }
}

.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(21, 21, 21, 0.604);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 5rem;
    position: relative;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: $accent;
    text-align: center;
    width: 500px;
    height: 200px;
    color: $white;
  }
}
</style>
