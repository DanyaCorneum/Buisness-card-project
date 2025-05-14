<script setup>
function placeholder() {
  console.log('Hello world')
  const form = document.querySelector('form')
  form.reset()
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
        <p>Placeholder</p>
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>
      <li>
        <p>Placeholder</p>
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>
      <li>
        <p>Placeholder</p>
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
      </li>
      <li>
        <p>Placeholder</p>
        <span><img src="/src/assets/like.svg" alt="" /></span>
        <span>0</span>
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
      $angle: 0deg;
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
