<script setup>
import MiniCard from '@/components/MiniCard.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <div class="info">
    <div class="info__text">
      <h1>Get ready</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        esse autem aut voluptatum dolorum inventore amet, corporis dolorem magnam atque enim quidem
        quam necessitatibus dolore.
      </p>
      <div class="info__cards"></div>
      <button>Go</button>
    </div>
    <div class="info-cards">
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
      <MiniCard>
        <template #img>
          <img src="/src/assets/bag-check.svg" alt="" />
        </template>
        <template #header> lol </template>
        <template #text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam est
        </template>
      </MiniCard>
    </div>
    <Card :class="`info-card`"
      ><template #img>
        <img src="/src/assets/f739639bd99c09f5f64caa43eb63c05d.jpg" alt="" />
      </template>
      <template #header> Some </template>
    </Card>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;
.info {
  background: #134370;
  background: radial-gradient(circle, rgba(19, 67, 112, 0.86) 0%, rgba(37, 43, 43, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .info__text {
    opacity: 0;
    padding: 5rem 10rem;
    color: $white;
    text-align: center;
    max-width: 50%;
    animation: appear-info 1s ease-in 100ms forwards;
    button {
      position: relative;
      background: linear-gradient(90deg, $accent 42%, #076dcc 100%);
      z-index: 1;
      overflow: hidden;
      padding: 1.5rem 5rem;
      font-size: 1.5rem;
      color: $white;
      border-radius: 2px;
      transition: box-shadow 200ms ease-in;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, $accent 100%, #076dcc 100%);
        opacity: 0;
        transition: opacity 200ms ease-in;
        z-index: -1;
      }

      &:hover::before {
        opacity: 1;
      }
      &:hover {
        box-shadow: 0 0 40px $accent;
      }
    }
  }
}
@keyframes appear-info {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.info-cards {
  display: grid;
  grid-template-rows: 400px 400px;
  grid-template-columns: 300px 300px 300px;
  gap: 4.5rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 1000px) {
    grid-template-rows: 400px 400px 400px;
    grid-template-columns: 300px 300px;
  }
  @media screen and (max-width: 650px) {
    grid-template-rows: 400px 400px 400px 400px;
    grid-template-columns: 300px;
  }
}
.info-card {
  margin-top: 1.5rem;
  border: none;
  box-shadow: none;
  align-items: center;
  animation: appear-info ease;
  img {
    height: 500px;
  }
  button {
    transition: 200ms ease;
    &:hover {
      background-color: #134370;
    }
  }
}
</style>
