<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return { store };
  },
  props: {
    btnClass: String,
    optionClass: String,
    optionName: String,
    optionSubname: String,
    optionPrice: String,
  },
  components: { AppButton },
};
</script>

<template>
  <!-- <div class="col-4">
    <div
      class="card white-card p-5 rounded-5 shadow-lg border-0"
      :class="priceClass">
      <h2>
        <b>{{ priceOption.name }}</b>
      </h2>
      <p>{{ priceOption.subName }}</p>
      <span class="w-75">$</span>
      <p class="price">
        <b>{{ priceOption.price }}</b>
      </p>
      <div class="price-bg">
        <b>{{ priceOption.price }}</b>
      </div>
      <span class="month">Per Month</span>
      <span>{{ priceOption.optionInfo }}</span>
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
  </div> -->

  <div class="col-4">
    <div
      class="card p-5 rounded-5 shadow-lg border-0 align-items-center"
      :class="optionClass">
      <div class="optionInfo d-flex flex-column align-items-center lh-lg">
        <h2>
          <b>{{ optionName }}</b>
        </h2>
        <p>{{ optionSubname }}</p>
        <div class="price mt-3 lh-1">
          <span class="dollar">$</span>
          <p>
            <b>{{ optionPrice }}</b>
          </p>
          <span class="month">Per Month</span>
        </div>

        <div class="price-bg">
          <b>{{ optionPrice }}</b>
        </div>
      </div>

      <!-- <span>{{ priceOption.optionInfo }}</span> -->
      <div class="price-option-info py-4">
        <ul class="list-unstyled features">
          <li>
            <b>Creative</b>
            Design Enables
          </li>
          <li>
            <b>Vibrant</b>
            Color Usage
          </li>
          <li>
            <b>Eye</b>
            Catching Design
          </li>
          <li>
            <b>Extreme</b>
            Typography
          </li>
          <li>
            <b>Exceptional</b>
            Design
          </li>
        </ul>
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
  .month {
    font-size: 15px;
  }

  .price-option-info {
    .features {
      font-size: 15px;
    }
  }
}

.white-card {
  .price-bg {
    color: rgba(0, 0, 0, 0.178);
  }
}

.pink-card {
  background: linear-gradient(
    90deg,
    rgba(200, 54, 109, 1) 0%,
    rgba(212, 64, 109, 1) 50%,
    $mainPink 100%
  );
  color: white;
  .price-bg {
    color: rgba(255, 255, 255, 0.178);
  }
}
</style>
