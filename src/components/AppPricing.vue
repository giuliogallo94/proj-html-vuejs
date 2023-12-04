<script>
import { store } from "../store";
import AppPricingCard from "./AppPricingCard.vue";
export default {
  data() {
    return { store };
  },
  components: {
    AppPricingCard,
  },
};
</script>

<template>
  <section>
    <div class="ms_container p-5">
      <div class="title text-center pb-5">
        <p class="pink-p">Price List</p>
        <h2><b>Our</b> Pricing</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface
        </p>
      </div>
      <div
        class="container d-flex justify-content-center align-items-center px-0 text-center">
        <div class="row row-cols-3 my-0 mx-auto w-100">
          <AppPricingCard
            v-for="item in store.pricingCard"
            :priceOption="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

section {
  background-color: $bgBlue;
  .title {
    color: white;

    .pink-p {
      color: $mainPink;
    }
  }
}
</style>
