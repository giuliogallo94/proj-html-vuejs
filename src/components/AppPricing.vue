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
  methods: {
    changeClasses(index) {
      for (let i = 0; i < this.store.pricingCard.length; i++) {
        this.store.pricingCard[i].isSelected = false;
      }
      this.store.pricingCard[index].isSelected = true;
    },
  },
};
</script>

<template>
  <section>
    <div class="ms_container p-5 d-flex flex-column align-items-center">
      <div class="title text-center pb-5">
        <p class="up-title">Price List</p>
        <h2><b>Our</b> Pricing</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface
        </p>
      </div>
      <div class="container mx-0 px-0 text-center">
        <div class="row">
          <AppPricingCard
            v-for="(item, option) in store.pricingCard"
            :key="option"
            :priceOption="item"
            :btnClass="
              item.isSelected == true
                ? `btnWhiteArrow pageBtn`
                : `btnPinkArrow pageBtn`
            "
            :optionClass="item.isSelected == true ? `pink-card` : `white-card`"
            @click="changeClasses(option)" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

section {
  background-color: $bgBlue;
  position: relative;
  padding-bottom: 15rem;
  .title {
    color: white;
  }

  .container {
    position: absolute;
    top: 40%;
    left: 10vw;
  }
  .row {
    width: 80vw;
  }
}
</style>
