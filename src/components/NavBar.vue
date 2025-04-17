<script setup>
import NavButton from './NavButton.vue'
import ChangeTheme from './ChangeTheme.vue'
</script>

<template>
  <div class="nav-bar">
    <img src="/src/assets/logo.svg" alt="" class="nav-bar__icon" />
    <div class="nav-bar__inner">
      <NavButton :link="`/`" :className="`nav-btn`">Home</NavButton>
      <NavButton :link="`/services`" :className="`nav-btn`">Services</NavButton>
      <NavButton :link="`/feature`" :className="`nav-btn`">Feature</NavButton>
      <NavButton :link="`/whishes`" :className="`nav-btn`">Whishes</NavButton>
      <NavButton :link="`/FAQ`" :className="`nav-btn`">FAQ</NavButton>
      <ChangeTheme />
    </div>
  </div>
</template>

<style lang="scss">
.nav-bar {
  padding: 0.3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
  }
  .nav-bar__inner {
    display: flex;
    justify-content: space-around;
    .nav-btn {
      text-transform: uppercase;
      width: 5rem;
      height: 2.5rem;
      margin: 0.5rem;
      border: none;
      transition: background-color ease 200ms;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
