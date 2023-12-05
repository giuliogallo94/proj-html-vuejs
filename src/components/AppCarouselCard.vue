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

    <div class="portfolio-title d-flex justify-content-between pt-3 px-3">
      <p>
        <b>{{ portfolio.title }}</b>
      </p>
      <p>{{ portfolio.subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.ms_card {
  min-width: calc(100vw / 3.75);

  img {
    max-width: 100%;
  }
  font-size: 15px;
}
</style>
