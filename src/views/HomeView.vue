<script setup>
import MiniCard from '@/components/MiniCard.vue'
import { useTheme } from '@/stores/changeTheme'
import ModalWindow from '@/components/ModalWindow.vue'

const theme = useTheme()
</script>

<template>
  <div class="home">
    <div :class="`hero-section ${theme.getTheme === 'dark' ? '' : 'hero-section-light'}`">
      <div class="hero-section__inner">
        <h2>{{ $t('HomeView.heroTitle') }}</h2>
        <p>{{ $t('HomeView.heroInner') }}</p>
        <ModalWindow />
      </div>
      <a href="https://github.com/DanyaCorneum">
        <img
          src="https://i.pinimg.com/474x/7f/16/c4/7f16c4622b4243f54027b0aa986edf0d.jpg"
          alt=""
          class="hero-section-img"
        />
      </a>
    </div>
    <div :class="`my-projects ${theme.getTheme === 'dark' ? '' : 'my-projects-light'}`">
      <ul>
        <li>
          <a href="https://github.com/DanyaCorneum/Britlex">
            <MiniCard :class="`project`" :icon="`/src/assets/logo.svg`" :head="`Britlex`" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DanyaCorneum/Konstruct">
            <MiniCard :class="`project`" :icon="`/src/assets/logo.svg`" :head="`Konstruct`" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DanyaCorneum/IP-Address-Tracker">
            <MiniCard
              :class="`project`"
              :icon="`/src/assets/logo.svg`"
              :head="`IP Address Tracker`"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/DanyaCorneum/advice-generator-app">
            <MiniCard
              :class="`project`"
              :icon="`/src/assets/logo.svg`"
              :head="`Advice Generator App`"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/_main.scss' as *;

.home {
  background-color: $main;
  color: $white;
  .hero-section {
    position: relative;
    display: flex;
    padding: 100px;
    justify-content: space-between;
    background: linear-gradient($main, $dark);
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.5rem;
    }
    .hero-section__inner {
      position: relative;
      font-weight: 300;
      h2 {
        text-transform: uppercase;
        text-align: center;
        font-size: 5rem;
        font-weight: 300;
        @media screen and (max-width: 1000px) {
          font-size: 3rem;
        }
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        font-size: 1.5rem;
        width: 0px;
        border-right: 5px solid $white;
        animation:
          type 6.5s steps(55, end) forwards,
          blinking 0.5s step-end infinite;
        @media screen and (max-width: 1000px) {
          font-size: 1rem;
          text-align: center;
        }
        @keyframes type {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes blinking {
          from {
            border-color: transparent;
          }
          50% {
            border-color: $white;
          }
          to {
            border-color: transparent;
          }
        }
        // &::after {
        //   position: absolute;
        //   content: '';
        //   width: 100%;
        //   height: 0.2rem;
        //   background-color: $white;
        //   border-radius: 10px;
        // }
      }
    }
    img {
      height: 30rem;
      width: 30rem;
      border: 10px solid $dark;
      border-radius: 50%;
      transition: transform 200ms ease-in-out;
      &:hover {
        transform: translateY(-30px);
      }
      @media screen and (max-width: 1200px) {
        height: 15rem;
        width: 15rem;
      }
    }
  }

  .my-projects {
    background: $dark;
    padding-bottom: 5rem;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      @media screen and (max-width: 970px) {
        flex-direction: column;
        gap: 4rem;
        justify-content: center;
        align-items: center;
      }
      li {
        a {
          text-decoration: none;
          .project {
            h1 {
              font-size: 17px;
            }
            min-height: 200px;
            min-width: 200px;
          }
        }
      }
    }
  }
  .hero-section-light {
    background: $light;
    color: $dark;
    & * {
      color: $dark;
    }
  }
  .my-projects-light {
    background: linear-gradient($light, $main);
    color: $main;
  }
}
</style>
