<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    card: String,
  },
};
</script>

<template>
  <div class="ms_card">
    <div class="col mx-4">
      <img :src="`../src/assets/img/Group-${card.url}.png`" :alt="card.name" />
      <h5 class="my-5">
        <b>
          {{ card.name }}
        </b>
      </h5>
      <p>
        When, while the lovely valley teems with vapour around meand the
        meridian sun strikes the upper
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
img {
  height: 150px;
  //   max-width: 80%;
}
</style>
