<script setup>
import NavButton from './NavButton.vue'
import ChangeTheme from './ChangeTheme.vue'
import Dropdown from './Dropdown.vue'
import { useTheme } from '@/stores/changeTheme'

function openDropdown() {
  const dropdown = document.querySelector('.nav-slide')
  dropdown.classList.toggle('hide')
}
function closeDropdown() {
  const dropdown = document.querySelector('.nav-slide')
  dropdown.classList.toggle('hide')
  console.log('hide-animation')
}

const theme = useTheme()
</script>

<template>
  <div class="navigation">
    <div :class="`nav-bar ${theme.getTheme === 'dark' ? '' : 'nav-bar-light'}`">
      <img
        :src="`${theme.getTheme === 'dark' ? '/src/assets/logo_light.svg' : '/src/assets/logo.svg'}`"
        alt=""
        class="nav-bar__icon"
      />
      <div class="nav-bar__inner">
        <NavButton
          :link="`/`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          >Home</NavButton
        >
        <NavButton
          :link="`/services`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          >Services</NavButton
        >
        <NavButton
          :link="`/information`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          >Information</NavButton
        >
        <NavButton
          :link="`/whishes`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          >Whishes</NavButton
        >
        <ChangeTheme class="change-theme" />
      </div>
      <Dropdown @onClick="openDropdown" class="dropdown" />
    </div>
    <div :class="`nav-slide hide`">
      <div :class="`nav-slide__inner ${theme.getTheme === 'dark' ? '' : 'nav-slide__inner-light'}`">
        <button class="exit" @click="closeDropdown">
          <img
            :src="`${theme.getTheme === 'dark' ? '/src/assets/cross_white.svg' : '/src/assets/cross.svg'}`"
            alt=""
          />
        </button>
        <NavButton
          :link="`/`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          @onClick="closeDropdown"
          >Home</NavButton
        >
        <NavButton
          :link="`/services`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          @onClick="closeDropdown"
          >Services</NavButton
        >
        <NavButton
          :link="`/information`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          @onClick="closeDropdown"
          >information</NavButton
        >
        <NavButton
          :link="`/whishes`"
          :className="`nav-btn ${theme.getTheme === 'dark' ? '' : 'nav-btn-light'}`"
          @onClick="closeDropdown"
          >Whishes</NavButton
        >
        <ChangeTheme class="change-theme" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/_main.scss' as *;

template {
  position: relative;
}
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.526);
  animation: show-nav-slide 500ms ease normal forwards;
  .nav-slide__inner {
    background: $main;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: show-nav-slide-inner 800ms ease normal forwards;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
  .nav-slide__inner-light {
    background: $light;
  }
  .change-theme {
    width: 10rem;
    margin: 0;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
  @keyframes show-nav-slide-inner {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes show-nav-slide {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}
.hide {
  animation: show 500ms ease reverse forwards;
  display: none;
}
.nav-btn {
  text-transform: uppercase;
  background-color: $main;
  color: $accent;
  font-weight: 400;
  width: 10rem;
  height: 2.5rem;
  border: none;
  transition: ease 200ms;
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
}
.nav-bar-light {
  background-color: $light;
}
.nav-btn-light {
  background-color: $light;
}
</style>
