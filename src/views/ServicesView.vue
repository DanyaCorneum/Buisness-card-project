<script setup>
import Card from '@/components/Card.vue'
import { ref, watch } from 'vue'

const currentSlide = ref(1)
function nextElement() {
  let newValue = currentSlide.value + 1
  if (newValue > 5) {
    currentSlide.value = 1
  } else {
    currentSlide.value = newValue
  }
}
function pervElement() {
  let newValue = currentSlide.value - 1
  if (newValue < 1) {
    currentSlide.value = 5
  } else {
    currentSlide.value = newValue
  }
}
watch(currentSlide, (newSlide, pervSlide) => {
  console.log(pervSlide, newSlide)
  if (newSlide > pervSlide) {
    document.getElementById(`${pervSlide}`).classList.add('hiden-back')
    if (pervSlide == 5) {
      for (let i = 1; i < 5; i++) {
        document.getElementById(`${i}`).classList.add('hiden')
        document.getElementById(`${i}`).classList.remove('hiden-back')
      }
    }
    document.getElementById(`${newSlide}`).classList.remove('hiden-back')
    document.getElementById(`${newSlide}`).classList.remove('hiden')
  } else {
    document.getElementById(`${pervSlide}`).classList.add('hiden')
    if (pervSlide == 1) {
      for (let i = 5; i > 1; i--) {
        document.getElementById(`${i}`).classList.remove('hiden')
        document.getElementById(`${i}`).classList.add('hiden-back')
      }
    }
    document.getElementById(`${newSlide}`).classList.remove('hiden-back')
    document.getElementById(`${newSlide}`).classList.remove('hiden')
  }
})
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
        <Card :class="`element`" :name="`programming`" :btn="`more`" id="1">
          <template #img>
            <img
              src="/src/assets/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space-min.jpg"
              alt=""
            />
          </template>
          <template #header>programming</template>
        </Card>
        <Card :class="`element hiden`" :name="`ART`" :btn="`more`" id="2">
          <template #img>
            <img src="/src/assets/art.jpg" alt="" />
          </template>
          <template #header> ART </template>
        </Card>
        <Card :class="`element hiden`" id="3"
          ><template #img>
            <img src="/src/assets/design.jpg" alt="" />
          </template>
          <template #header> Design </template>
        </Card>
        <Card :class="`element hiden`" id="4"
          ><template #img>
            <img src="/src/assets/game.jpg" alt="" />
          </template>
          <template #header> Game </template>
        </Card>
        <Card :class="`element hiden`" id="5"
          ><template #img>
            <img src="/src/assets/chess.jpg" alt="" />
          </template>
          <template #header> Chess </template>
        </Card>
      </div>
      <img @click="nextElement" class="arrow right" src="/src/assets/arrow-light.svg" alt="" />
    </div>
    <div class="pages" style="text-align: center">
      <div class="point">
        <input v-model="currentSlide" value="1" type="radio" />
        <label for="radio1"></label>
      </div>
      <div class="point">
        <input v-model="currentSlide" value="2" type="radio" />
        <label for="radio2"></label>
      </div>
      <div class="point">
        <input v-model="currentSlide" value="3" type="radio" />
        <label for="radio3"></label>
      </div>
      <div class="point">
        <input v-model="currentSlide" value="4" type="radio" />
        <label for="radio4"></label>
      </div>
      <div class="point">
        <input v-model="currentSlide" value="5" type="radio" />
        <label for="radio5"></label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;
.services {
  background: linear-gradient($main, $dark);
}
.about-services {
  opacity: 0;
  background-image: url('/src/assets/modern-blue-3840x2160-22197.jpg');
  background-size: cover;
  color: $white;
  min-height: 30rem;
  padding: 1.5rem;
  animation: appear-service 700ms ease 100ms forwards;
  @keyframes appear-service {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  margin: 7rem 0;
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
      width: 60%;
    }
  }
  .arrow {
    z-index: 999;
    width: 2.5rem;
    height: 2.5rem;
    transition: ease 200ms;
    &:hover {
      cursor: pointer;
      width: 3rem;
      height: 3rem;
    }
  }
  .right {
    transform: scale(-1, -1);
  }
}
.pages {
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  .point {
    position: relative;

    input {
      opacity: 0;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0;
      position: absolute;
      z-index: 1;
      cursor: pointer;

      &:checked + label::before {
        background-color: $dark-accent;
      }
    }

    label {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background-color: $white;
        border-radius: 50%;
        transition: background-color 200ms ease;
        left: 50%;
      }
    }
  }
}
</style>
