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
  <section id="Services">
    <div
      class="ms_container text-center py-5 d-flex flex-column align-items-center">
      <div class="title mb-5">
        <p class="up-title">Our Services</p>
        <h2><b>What</b> We Do</h2>
        <p>When, while the lovely valley teems with vapour around meand the</p>
      </div>
      <div class="container text-center card-list py-5">
        <div class="row row-cols-1 row-cols-xxl-4 g-5">
          <AppServicesCard
            v-for="cardObj in store.servicesCard"
            :card="cardObj" />
        </div>
      </div>
      <div class="button pt-5 pb-3">
        <AppButton btnText="View All Services" btnClass="btnPink pageBtn" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
