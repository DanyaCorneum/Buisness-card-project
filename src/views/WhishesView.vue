<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useTheme } from '@/stores/changeTheme'

const theme = useTheme()
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

    listOfWhishes.value = [newWish, ...listOfWhishes.value]
    await axios.get('http://localhost:3001/whishes/')

    whish.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div :class="`whishes ${theme.getTheme === 'dark' ? '' : 'whishes-light'}`">
    <h1>Whishes</h1>
    <p>You can add some wishes and like others</p>
    <form @submit.prevent="addWhish">
      <input v-model="whish" type="text" />
      <button>Add</button>
    </form>
    <ul>
      <li class="appear-wish" v-for="w in listOfWhishes" :key="w.id" :id="w.id">
        <p>{{ w.content }}</p>
        <span @click="() => console.log('Test')"><img src="/src/assets/like.svg" alt="" /></span>
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
      z-index: 1;
      box-shadow: 0 0 40px $accent;
    }
    span img {
      &:hover {
        cursor: pointer;
      }
    }
    * {
      margin: 0 0.5rem;
    }
  }
}

.whishes-light {
  background-color: $light;
  .appear-wish {
    background-color: $contrast;
  }
}
</style>
