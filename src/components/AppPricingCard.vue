<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return { store };
  },
  props: {
    priceOption: String,
  },
  components: { AppButton },
};
</script>

<template>
  <div class="card p-5">
    <h2>{{ priceOption.name }}</h2>
    <p>{{ priceOption.subName }}</p>
    <span>$</span>
    <span>{{ priceOption.price }}</span>
    <span>Per Month</span>
    <!-- <span>{{ priceOption.optionInfo }}</span> -->
    <div class="price-option-info">
      <ul class="list-unstyled">
        <li v-for="(info, featureIndex) in priceOption.optionInfo">
          <b>{{ info.title }}</b>
          {{ info.features }}
        </li>
      </ul>
    </div>
    <div class="button">
      <AppButton btnText="Order Now" btnClass="btnPink pageBtn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
