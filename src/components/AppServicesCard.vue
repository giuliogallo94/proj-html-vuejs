<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    card: String,
  },
  components: { AppButton },
};
</script>

<template>
  <div class="col rounded-5 pb-xxl-5 mb-5 mb-xxl-0">
    <div class="ms_card mx-4">
      <div class="service-image rounded-5 p-3">
        <img
          :src="`../src/assets/img/Group-${card.url}.png`"
          :alt="card.name"
          class="w-md-50 w-xxl-100" />
      </div>

      <div class="service-info pt-3">
        <h5 class="mt-5 mb-4">
          <b>
            {{ card.name }}
          </b>
        </h5>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper
        </p>
      </div>
      <div class="services-button">
        <div class="button mx-auto">
          <AppButton btnText="&rarr;" btnClass="arrowBtn" btnTextClass="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.col {
  position: relative;
  padding: 4rem;
  border: 1px solid $bgBlue;

  .service-image {
    background-color: white;
    width: 50%;
    position: absolute;
    top: -100px;
    left: 25%;
    img {
      max-width: 100%;
    }
  }
  .services-button {
    display: none;
    position: absolute;
    left: calc((337.5px / 2) - (54.77px / 2));
    bottom: -7%;
  }

  &:hover {
    background-color: $bgBlue;
    color: white;

    .services-button {
      display: block;
    }
  }
}

@media screen and (min-width: 1400px) {
  .col {
    border: none;
    padding: 1rem;
  }
}
</style>
