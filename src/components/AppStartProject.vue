<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
import AppServicesCard from "./AppServicesCard.vue";

export default {
  data() {
    return { store };
  },
  components: { AppServicesCard, AppButton },
};
</script>

<template>
  <section>
    <div class="ms_container d-flex justify-content-between p-5">
      <div class="image p-5 text-center">
        <img src="../assets/img/men-data.png" alt="" />
      </div>
      <div class="section-title w-50 p-5">
        <p>Start Your Project</p>
        <h2 class="mb-5"><b>Grow Your Business</b> With Our Strategy</h2>
        <p class="blue-p">
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface of the impenetrable folliage of
          my trees, and but a few stray gleams steal into the inner sanctuary
        </p>
        <div class="buttons d-flex justify-content-start mt-5">
          <AppButton
            btnText="Try It Now"
            btnClass="btnPink pageBtn"
            class="me-4" />
          <AppButton btnText="Explore More" btnClass="btnBlue pageBtn" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

section {
  background-color: $bgBlue;

  .image {
    // position: relative;
    background-image: url(../assets/img/nemoodar.png);
    background-position: 25% 0%;
    background-repeat: no-repeat;
    background-size: 70%;

    img {
      max-width: 80%;
      //   position: absolute;
    }
  }
  .section-title {
    color: white;

    .blue-p {
      color: $mainBlue;
    }

    h2 {
      font-size: 60px;
    }
  }
}
</style>
