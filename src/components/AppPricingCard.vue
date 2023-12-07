<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return { store };
  },
  props: {
    priceOption: String,
    btnClass: String,
    optionClass: String,
  },
  components: { AppButton },
};
</script>

<template>
  <div class="col-4">
    <div
      class="card p-5 rounded-5 shadow-lg border-0 align-items-center"
      :class="optionClass">
      <div class="optionInfo d-flex flex-column align-items-center lh-lg">
        <h2>
          <b>{{ priceOption.name }}</b>
        </h2>
        <p>{{ priceOption.subName }}</p>
        <div class="price mt-3 lh-1">
          <span class="dollar">$</span>
          <p class="price">
            <b>{{ priceOption.price }}</b>
          </p>
        </div>
        <div class="price-bg">
          <b>{{ priceOption.price }}</b>
        </div>
        <span class="month">Per Month</span>

        <div class="price-option-info py-5">
          <ul class="list-unstyled lh-lg features">
            <li v-for="(info, index) in priceOption.optionInfo" :key="index">
              <p>
                <b>{{ info.title }}</b>
                {{ info.features }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="button">
        <AppButton btnText="Order Now" :btnClass="btnClass" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
  position: relative;

  ul {
    line-height: 2rem;
  }
  .price {
    position: relative;

    .dollar {
      position: absolute;
      left: 0%;
      font-size: 15px;
    }
    p {
      font-size: 80px;
    }
  }

  .price-bg {
    font-size: 250px;
    position: absolute;
    top: -21%;
    right: -3%;
  }
}

.white-card {
  .price-bg {
    color: rgba(0, 0, 0, 0.178);
  }
}

.pink-card {
  background: $bgGradientPink;
  color: white;
  .price-bg {
    color: rgba(255, 255, 255, 0.178);
  }
}
</style>
