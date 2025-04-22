<script setup>
import NavButton from './NavButton.vue'
import ChangeTheme from './ChangeTheme.vue'
import Dropdown from './Dropdown.vue'

function openDropdown() {
  const dropdown = document.querySelector('.nav-slide')
  dropdown.classList.toggle('hide')
}
</script>

<template>
  <div class="nav-bar">
    <img src="/src/assets/logo_light.svg" alt="" class="nav-bar__icon" />
    <div class="nav-bar__inner">
      <NavButton :link="`/`" :className="`nav-btn`">Home</NavButton>
      <NavButton :link="`/services`" :className="`nav-btn`">Services</NavButton>
      <NavButton :link="`/feature`" :className="`nav-btn`">Feature</NavButton>
      <NavButton :link="`/whishes`" :className="`nav-btn`">Whishes</NavButton>
      <NavButton :link="`/FAQ`" :className="`nav-btn`">FAQ</NavButton>
      <ChangeTheme class="change-theme" />
    </div>
    <Dropdown @onClick="openDropdown" class="dropdown" />
  </div>
  <div class="nav-slide hide">
    <div class="nav-slide__inner">
      <NavButton :link="`/`" :className="`nav-btn`">Home</NavButton>
      <NavButton :link="`/services`" :className="`nav-btn`">Services</NavButton>
      <NavButton :link="`/feature`" :className="`nav-btn`">Feature</NavButton>
      <NavButton :link="`/whishes`" :className="`nav-btn`">Whishes</NavButton>
      <NavButton :link="`/FAQ`" :className="`nav-btn`">FAQ</NavButton>
      <ChangeTheme class="change-theme" />
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/_main.scss' as *;

.nav-bar {
  background-color: $main;
  padding: 0rem 2rem;
  height: 5rem;
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
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
}
.change-theme {
  margin: 0 1.5rem;
}

.nav-slide {
  display: flex;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.237);
  justify-content: end;
  .nav-slide__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: $main;
  }
  .change-theme {
    width: 10rem;
    margin: 0;
  }
}
.hide {
  display: none;
}

.nav-btn {
  text-transform: uppercase;
  background-color: $main;
  color: $accent;
  font-weight: 600;
  width: 10rem;
  height: 2.5rem;
  border: none;
  transition: background-color ease 200ms;
  &:hover {
    background-color: $contrast;
    cursor: pointer;
  }
}
.dropdown {
  display: none;
  @media screen and (max-width: 1000px) {
    display: inline;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
