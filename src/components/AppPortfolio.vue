<script>
import { store } from "../store";
import AppPortfolioCard from "./AppPortfolioCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppPortfolioCard },
  mounted() {},

  methods: {
    showNext() {
      if (this.store.currentIndex < store.portfolio.length - 1) {
        this.store.currentIndex = this.store.currentIndex + 1;
      } else {
        this.store.currentIndex = 0;
      }
    },
    showPrev() {
      if (this.store.currentIndex == 0) {
        this.store.currentIndex = store.portfolio.length - 1;
      } else {
        this.store.currentIndex = this.store.currentIndex - 1;
      }
    },
  },
};
</script>

<template>
  <section class="py-5">
    <div
      class="ms_container portfolio-top d-flex justify-content-between align-items-center pb-4">
      <div>
        <p class="up-title">Portfolio</p>
        <h2><b>latest</b> work</h2>
      </div>
      <div class="carousel-arrow">
        <button @click="showPrev" class="btn-carousel rounded-5">&larr;</button>
        <button @click="showNext" class="btn-carousel ms-4 rounded-5">
          &rarr;
        </button>
      </div>
    </div>

    <div class="carousel d-flex py-4 justify-content-center">
      <AppPortfolioCard
        :indexToShow="
          store.currentIndex == 0
            ? store.portfolio.length - 2
            : store.currentIndex - 1 == 0
            ? store.portfolio.length - 1
            : store.currentIndex - 2
        "
        :carousel="store.portfolio" />
      <AppPortfolioCard
        :indexToShow="
          store.currentIndex == 0
            ? store.portfolio.length - 1
            : store.currentIndex - 1
        "
        :carousel="store.portfolio" />
      <!-- CARD CENTRALE -->

      <AppPortfolioCard
        :indexToShow="store.currentIndex"
        :carousel="store.portfolio" />

      <!-- //CARD CENTRALE -->

      <AppPortfolioCard
        :indexToShow="
          store.currentIndex == store.portfolio.length - 1
            ? 0
            : store.currentIndex + 1
        "
        :carousel="store.portfolio" />
      <AppPortfolioCard
        :indexToShow="
          store.currentIndex == store.portfolio.length - 1
            ? 1
            : store.currentIndex + 1 == store.portfolio.length - 1
            ? 0
            : store.currentIndex + 2
        "
        :carousel="store.portfolio" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.carousel {
  overflow: hidden;
}
.btn-carousel {
  background-color: white;
  border-color: $mainPink;
  color: $mainPink;
}
</style>
