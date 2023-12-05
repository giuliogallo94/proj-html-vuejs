<script>
import { store } from "../store";
import AppCarouselCard from "./AppCarouselCard.vue";

export default {
  data() {
    return { store };
  },
  components: { AppCarouselCard },
};
</script>

<template>
  <section class="py-5">
    <div class="ms_container pb-5">
      <p class="up-title">Portfolio</p>
      <h2><b>latest</b> work</h2>
    </div>
    <div class="carousel d-flex">
      <AppCarouselCard
        v-for="portfolioObj in store.carousel"
        :portfolio="portfolioObj" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
