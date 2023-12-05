<script>
import { store } from "../store";
import AppCarouselCard from "./AppCarouselCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCarouselCard },
  mounted() {},

  methods: {},
};
</script>

<template>
  <section class="py-5">
    <div class="ms_container pb-5">
      <p class="up-title">Portfolio</p>
      <h2><b>latest</b> work</h2>
    </div>
    <div class="carousel d-flex py-4 justify-content-center">
      <AppCarouselCard
        v-for="(portfolioObj, index) in store.carousel"
        :key="index"
        :portfolio="portfolioObj" />
    </div>
    <button @click="Prev">Prev</button>
    <button @click="next">Next</button>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.carousel {
  overflow: hidden;
}
</style>
