<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  props: {
    portfolio: String,
  },
};
</script>

<template>
  <div class="ms_card mx-3 shadow rounded-4">
    <img :src="`src/assets/img/${portfolio.url}`" alt="" class="rounded-4" />

    <div
      class="portfolio-title d-flex justify-content-between align-items-center py-4 px-3">
      <p class="m-0">
        <b>{{ portfolio.title }}</b>
      </p>
      <p class="m-0">{{ portfolio.subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.ms_card {
  min-width: calc(100vw / 3.75);
  font-size: 15px;
  img {
    max-width: 100%;
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(200, 54, 109, 1) 0%,
      rgba(212, 64, 109, 1) 50%,
      $mainPink 100%
    );

    b {
      color: white;
    }

    p {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
