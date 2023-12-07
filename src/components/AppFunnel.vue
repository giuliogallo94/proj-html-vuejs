<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return { store };
  },
  components: { AppButton },
  methods: {
    addMail() {
      this.store.mailSubscribed.push(this.store.newSubscribe);
      this.store.newSubscribe = "";
    },
  },
};
</script>

<template>
  <section>
    <div class="ms_container">
      <div
        class="row funnel rounded-5 d-flex align-items-center justify-content-around py-5 px-3">
        <div class="col-5 title-funnel w-50">
          <h2>We Offer Awesome Services</h2>
          <p>
            When, while the lovely valley teems with vapour around meand the
            meridian sun strikes the upper surface
          </p>
        </div>
        <div
          class="mail-sub col-5 rounded-pill px-2 py-2 d-flex justify-content-between">
          <input
            type="text "
            class="border-0 text-start w-75 px-3"
            placeholder="Enter Your Email Address"
            v-model="store.newSubscribe" />
          <AppButton
            btnText="Subscribe"
            btnClass="btnBlue pageBtn"
            @buttonMethod="addMail" />
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
  background: $bgGradientPink;
  width: 80vw;
  position: absolute;
  top: -300%;
  left: 10vw;

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

    input:focus {
      outline: none;
    }
  }
}
</style>
