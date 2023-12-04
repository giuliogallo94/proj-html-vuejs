<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return { store };
  },
  components: { AppButton },
};
</script>

<template>
  <section>
    <div class="ms_container">
      <div
        class="row funnel rounded-5 d-flex align-items-center justify-content-around w-75 py-5 px-3">
        <div class="col-5 title-funnel w-50">
          <h2>We Offer Awesome Services</h2>
          <p>
            When, while the lovely valley teems with vapour around meand the
            meridian sun strikes the upper surface
          </p>
        </div>
        <div
          class="col-5 mail-sub rounded-pill px-2 py-2 d-flex justify-content-between">
          <input
            type="text"
            class="rounded-pill border-0 text-start"
            placeholder="Enter Your Email Address" />
          <AppButton btnText="Subscribe" btnClass="btnBlue pageBtn" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_container {
  position: relative;
}
.funnel {
  background: linear-gradient(
    90deg,
    rgba(182, 37, 110, 1) 0%,
    rgba(217, 70, 109, 1) 50%,
    rgba(249, 99, 107, 1) 100%
  );

  position: absolute;
  top: -300%;
  left: 13%;

  .title-funnel {
    color: white;
    p {
      font-size: 15px;
    }
  }

  .mail-sub {
    background-color: white;

    input::placeholder {
      color: grey;
      font-size: 15px;
      text-align: left;
    }
  }
}
</style>
