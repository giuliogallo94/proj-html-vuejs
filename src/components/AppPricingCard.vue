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
  <div class="col-4">
    <div class="card p-5">
      <h2>
        <b>{{ priceOption.name }}</b>
      </h2>
      <p>{{ priceOption.subName }}</p>
      <span class="w-50">$</span>
      <p class="price">
        <b>{{ priceOption.price }}</b>
      </p>
      <div class="price-bg">
        <b>{{ priceOption.price }}</b>
      </div>
      <span class="month">Per Month</span>
      <!-- <span>{{ priceOption.optionInfo }}</span> -->
      <div class="price-option-info py-5">
        <ul class="list-unstyled lh-lg features">
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
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
  position: relative;

  .price {
    font-size: 80px;
  }

  .price-bg {
    // max-height: fit-content;
    font-size: 250px;
    position: absolute;
    top: -15%;
    right: -3%;
    color: rgba(0, 0, 0, 0.178);
  }
  .month {
    font-size: 15px;
  }

  .price-option-info {
    .features {
      font-size: 15px;
    }
  }
}
</style>
