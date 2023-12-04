<script>
import { store } from "../store";
import AppServicesCard from "./AppServicesCard.vue";

export default {
  data() {
    return { store };
  },
  components: { AppServicesCard },
};
</script>

<template>
  <div class="ms_container text-center py-5">
    <div class="title">
      <p class="up-title">Our Services</p>
      <h2><b>What</b> We Do</h2>
      <p>When, while the lovely valley teems with vapour around meand the</p>
    </div>
    <div class="container text-center card-list py-5">
      <div class="row row-cols-4 g-5">
        <AppServicesCard
          v-for="cardObj in store.servicesCard"
          :card="cardObj" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_container {
  .title {
    .up-title {
      color: $mainPink;
    }
  }
}
</style>
