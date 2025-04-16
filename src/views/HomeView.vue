<script setup></script>

<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-section__inner">
        <h2>About me</h2>
        <p>My name is Daniil and I am a beginner Software Engineer</p>
      </div>
      <a href="https://github.com/DanyaCorneum">
        <img
          src="https://i.pinimg.com/474x/7f/16/c4/7f16c4622b4243f54027b0aa986edf0d.jpg"
          alt=""
          class="hero-section-img"
        />
      </a>
    </div>
    <div class="my-projects">
      <ul>
        <li>
          <p>IP Address tracker</p>
          <a href="https://github.com/DanyaCorneum/IP-Address-Tracker"
            ><img src="/src/assets/logo.svg" alt=""
          /></a>
        </li>
        <li>
          <p>Advice app generator</p>
          <a href="https://github.com/DanyaCorneum/advice-generator-app"
            ><img src="/src/assets/logo.svg" alt=""
          /></a>
        </li>
        <li>
          <p>Birtlex</p>
          <a href="https://github.com/DanyaCorneum/Britlex"
            ><img src="/src/assets/logo.svg" alt=""
          /></a>
        </li>
        <li>
          <p>Konstruct</p>
          <a href="https://github.com/DanyaCorneum/Konstruct"
            ><img src="/src/assets/logo.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  .hero-section {
    background-color: #f5f7fa;
    display: flex;
    padding: 100px;
    justify-content: space-between;
    .hero-section__inner {
      h2 {
        font-size: 5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
    & img {
      height: 30rem;
      width: 30rem;
      border: 10px solid black;
      border-radius: 50%;
      box-shadow: 0 0 25px black;
      transition: transform 200ms ease-in-out;
      &:hover {
        transform: translateY(-30px);
      }
    }
  }
  .my-projects {
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        text-align: center;
        margin: 20px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
