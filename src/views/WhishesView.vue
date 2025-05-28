<script setup>
import { ref } from 'vue'
import axios from 'axios'

const whish = ref('')
const listOfWhishes = ref([])
const currentID = ref(0)

axios
  .get('http://localhost:3001/current-id')
  .then((res) => (currentID.value = res.data))
  .catch(console.log)

console.log(currentID.value)

axios
  .get('http://localhost:3001/whishes/')
  .then((res) => (listOfWhishes.value = res.data))
  .catch(console.log)

async function addWhish() {
  const newWish = {
    content: whish.value,
    likes: 0,
    id: currentID.value,
  }
  try {
    currentID.value++
    await axios.post('http://localhost:3001/whishes/', newWish)
    await axios.put('http://localhost:3001/current-id/', currentID.value)

    listOfWhishes.value = [newWish, ...listOfWhishes.value]
    await axios.get('http://localhost:3001/whishes/')

    whish.value = ''
  } catch (error) {
    console.error(error)
  }
}

async function likeWhish(e) {
  const idOfWhish = e.target.closest('li').id
  console.log(idOfWhish)
  // for (let i = 0; i < listOfWhishes.value.length-1; i++){
  //   if (idOfWhish === listOfWhishes[i].id){
  //     pass
  //   }
  // }
}
</script>

<template>
  <div class="whishes">
    <h1>Whishes</h1>
    <p>You can add some wishes and like others</p>
    <form @submit.prevent="addWhish">
      <input v-model="whish" type="text" />
      <button>Add</button>
    </form>
    <ul>
      <li class="appear-wish" v-for="w in listOfWhishes" :key="w.id" :id="w.id">
        <p>{{ w.content }}</p>
        <span @click="likeWhish"><img src="/src/assets/like.svg" alt="" /></span>
        <span>{{ w.likes }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;

.whishes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $white;
  form {
    animation: show-form 400ms ease-in-out 0.1s forwards;
    opacity: 0;
    input {
      height: 3rem;
      width: 25rem;
      border-color: black;
    }
    button {
      color: $accent;
      text-align: center;
      height: 100%;
      padding: 0 3rem;
      transition: 200ms ease;
      border: 2px solid transparent;
      border-radius: 10px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      &:hover {
        border-color: $dark;
        background-color: $dark;
      }
    }
    @keyframes show-form {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 30px;
    li {
      box-sizing: content-box;
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $dark;
      padding: 2.5rem 3rem;
      gap: 20px;
      border-radius: 5px;
      min-width: 500px;
      position: relative;

      span img {
        &:hover {
          cursor: pointer;
        }
      }
      * {
        margin: 0 0.5rem;
      }
      &::after,
      &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: conic-gradient($dark-accent, $white, $accent, $dark-accent);
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
        padding: 0.2rem;
        border-radius: 5px;
      }
      &::before {
        filter: blur(1rem);
        opacity: 0.2;
        animation: 3s pulse linear infinite;
      }
      @keyframes pulse {
        from {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        to {
          opacity: 0.2;
        }
      }
    }
  }
}
</style>
