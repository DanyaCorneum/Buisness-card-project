<script setup>
import { useTheme } from '@/stores/changeTheme'
const props = defineProps(['icon', 'text', 'head'])
const theme = useTheme()
</script>

<template>
  <a :class="`mini-card ${theme.getTheme === 'dark' ? '' : 'mini-card-light'}`">
    <div class="icon">
      <slot name="img">
        <img :src="props.icon" alt="lol" />
      </slot>
    </div>
    <h1>
      <slot name="header">
        {{ props.head }}
      </slot>
    </h1>
    <p>
      <slot name="text">
        {{ props.text }}
      </slot>
    </p>
    <button>More</button>
  </a>
</template>

<style lang="scss">
@use '/src/assets/main' as *;

.mini-card {
  opacity: 0;
  background: $dark;
  color: $white;
  max-width: 200px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  transition: 200ms ease;
  box-shadow: 0 0 10px $dark;
  animation: appear-card 1500ms ease 100ms forwards;
  &:hover {
    cursor: pointer;
    transform: translateY(-20px);
    box-shadow: 0 10px 10px $dark;
    .icon {
      background-color: $accent;
      box-shadow: 0 0 20px $accent;
    }
  }
  .icon {
    transition: 200ms ease;
    background: $accent;
    width: 50px;
    height: 50px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: translateY(-70px);

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  h1 {
    margin-top: 0;
    text-transform: uppercase;
  }
  button {
    text-decoration: none;
    color: $accent;
  }
}
@keyframes appear-card {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.mini-card-light {
  background: $white;
  color: $dark;
}
</style>
