<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  props: {
    carousel: String,
    indexToShow: Number,
  },
};
</script>

<template>
  <div class="ms_card mx-3 shadow rounded-4">
    <img
      :src="`src/assets/img/${carousel[indexToShow].url}`"
      alt=""
      class="rounded-4" />

    <div
      class="portfolio-title d-flex justify-content-between align-items-center py-4 px-3">
      <p class="m-0">
        <b>{{ carousel[indexToShow].title }}</b>
      </p>
      <p class="m-0">{{ carousel[indexToShow].subtitle }}</p>
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

  &:hover {
    background: $bgGradientPink;

    b {
      color: white;
    }

    p {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
