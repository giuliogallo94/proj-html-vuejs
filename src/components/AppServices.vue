<script>
import AppServicesCard from "./AppServicesCard.vue";

export default {
  data() {
    return {};
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
    <div class="card-list">
      <AppServicesCard />
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
