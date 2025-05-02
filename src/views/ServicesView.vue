<script setup>
import Card from '@/components/Card.vue'
import { ref } from 'vue'

const currentSlide = ref(1)
function nextElement() {
  document.getElementById(`${currentSlide.value}`).classList.add('hiden-back')
  currentSlide.value++
  if (currentSlide.value > 5) {
    for (let i = 1; i < 5; i++) {
      document.getElementById(`${i}`).classList.add('hiden')
      document.getElementById(`${i}`).classList.remove('hiden-back')
    }
    currentSlide.value = 1
  }
  document.getElementById(`${currentSlide.value}`).classList.remove('hiden-back')
  document.getElementById(`${currentSlide.value}`).classList.remove('hiden')
}

function pervElement() {
  document.getElementById(`${currentSlide.value}`).classList.add('hiden')
  currentSlide.value--
  if (currentSlide.value < 1) {
    for (let i = 5; i > 1; i--) {
      document.getElementById(`${i}`).classList.remove('hiden')
      document.getElementById(`${i}`).classList.add('hiden-back')
    }
    currentSlide.value = 5
  }
  document.getElementById(`${currentSlide.value}`).classList.remove('hiden-back')
  document.getElementById(`${currentSlide.value}`).classList.remove('hiden')
}
</script>

<template>
  <div class="services">
    <div class="about-services">
      <div class="about-services__inner">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam pariatur atque amet,
          alias ut id corrupti tempore similique cumque repellendus.
        </p>
        <button>Contact us</button>
      </div>
    </div>
    <div class="services-slider">
      <img @click="pervElement" class="arrow left" src="/src/assets/arrow-light.svg" alt="" />
      <div class="services-slider__inner">
        <Card
          :class="`element`"
          :name="`programming`"
          :img="`src/assets/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space-min.jpg`"
          :btn="`more`"
          id="1"
        />
        <Card
          :class="`element hiden`"
          :name="`ART`"
          :img="`src/assets/art.jpg`"
          :btn="`more`"
          id="2"
        />
        <Card
          :class="`element hiden`"
          :name="`Design`"
          :img="`src/assets/design.jpg`"
          :btn="`more`"
          id="3"
        />
        <Card
          :class="`element hiden`"
          :name="`Game`"
          :img="`src/assets/game.jpg`"
          :btn="`more`"
          id="4"
        />
        <Card
          :class="`element hiden`"
          :name="`Chess`"
          :img="`src/assets/chess.jpg`"
          :btn="`more`"
          id="5"
        />
      </div>
      <img @click="nextElement" class="arrow right" src="/src/assets/arrow-light.svg" alt="" />
    </div>
    <div class="pages" style="text-align: center">
      <input v-model="currentSlide" value="1" type="radio" />
      <input v-model="currentSlide" value="2" type="radio" />
      <input v-model="currentSlide" value="3" type="radio" />
      <input v-model="currentSlide" value="4" type="radio" />
      <input v-model="currentSlide" value="5" type="radio" />
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;
.services {
  background: linear-gradient($main, $dark);
}
.about-services {
  background-image: url('/src/assets/modern-blue-3840x2160-22197.jpg');
  background-size: cover;
  color: $white;
  min-height: 30rem;
  padding: 1.5rem;
  .about-services__inner {
    opacity: 0;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 7rem;
    border: 2px solid $white;
    border-radius: 30px;
    min-height: 30rem;
    height: 100%;
    font-weight: 900;
    transition: opacity 400ms ease;
    h1 {
      text-transform: uppercase;
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    button {
      max-width: 12rem;
      background-color: transparent;
      border: 3px solid $white;
      border-radius: 30px;
      color: $white;
      padding: 1rem 2.5rem;
      text-transform: uppercase;
      transition: 150ms ease-in;
      &:hover {
        border-radius: 0;
      }
    }
    &:hover {
      opacity: 1;
    }
  }
}
.hiden {
  animation-name: change;
  animation-duration: 150ms;
  animation-timing-function: ease;
  opacity: 0;
}
.hiden-back {
  animation-name: change-rev;
  animation-duration: 150ms;
  animation-timing-function: ease;
  opacity: 0;
}
@keyframes change {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
@keyframes change-rev {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100px);
  }
}
.services-slider {
  margin: 5rem 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
  height: 30rem;
  .services-slider__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    .element {
      transition: 200ms ease;
      position: absolute;
      width: 80%;
    }
  }
  .arrow {
    z-index: 999;
    width: 2.5rem;
    height: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
  .right {
    transform: scale(-1, -1);
  }
}
.pages {
  input {
    border: none;
  }
}
</style>
