<script setup></script>

<template>
  <div class="footer">
    <div class="footer__inner">
      <h1>DanyaCorneum</h1>
      <p>
        {{ $t('Footer.MainText') }}
      </p>
    </div>
    <div class="footer__links">
      <a href="" class="footer-link"> {{ $t('Footer.Policy') }}</a>
      <a href="" class="footer-link"> {{ $t('Footer.Legal') }}</a>
      <a href="" class="footer-link"> {{ $t('Footer.Cookies') }}</a>
    </div>
  </div>
</template>

<style lang="scss">
@use '/src/assets/main' as *;

.footer {
  background-color: $dark;
  text-align: center;
  margin: 0;
  padding: 5rem 0;
  color: $white;
  .footer__inner {
    display: flex;
    padding: 10px;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  .footer__links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: $white;
      padding-right: 1rem;
      border-right: 2px solid $white;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
