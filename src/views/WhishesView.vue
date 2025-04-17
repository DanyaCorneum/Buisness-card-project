<script setup>
function placeholder() {
  console.log('Hello world')
}
</script>

<template>
  <div class="whishes">
    <h1>Whishes</h1>
    <p>You can add some wishes and like others</p>
    <form>
      <input type="text" />
      <button @click.prevent="placeholder">Add</button>
    </form>
    <ul>
      <li>
        Placeholder
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>

      <li>
        Placeholder
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>

      <li>
        Placeholder
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>

      <li>
        Placeholder
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.whishes {
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    input {
      height: 1.5rem;
      border-color: black;
    }
    button {
      height: 100%;
      width: 5.5rem;
      border: none;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
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
}
</style>
