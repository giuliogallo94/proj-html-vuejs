<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {};
  },
  components: { AppButton },
};
</script>

<template>
  <div class="ms_container">
    <div class="header-bottom pt-3 d-flex align-items-center">
      <div class="title w-100 w-lg-75">
        <h2 class="lh-base">
          <b>Business Planning</b> Digital Technology <b>Modern Solution !</b>
        </h2>
        <p class="my-5">
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface.
        </p>
        <div class="buttons d-flex justify-content-start">
          <AppButton
            btnText="Try It Now"
            btnClass="btnPink pageBtn"
            class="me-4" />
          <AppButton btnText="Explore More" btnClass="btnBlue pageBtn" />
        </div>
      </div>
      <div class="image d-none d-lg-block">
        <img src="../assets/img/header.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-bottom {
  padding-bottom: 2rem;
  .title {
    h2 {
      color: white;
      font-size: 60px;
    }
    p {
      color: #03a7d3e6;
    }
  }

  .image {
    img {
      max-width: 100%;
    }
  }
}

@media screen and (min-width: 992px) {
  .header-bottom {
    padding-bottom: 8rem;
  }
}
</style>
