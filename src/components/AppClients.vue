<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },
};
</script>

<template>
  <section>
    <div class="ms_container d-flex justify-content-around">
      <div
        v-for="sponsor in store.clients"
        class="logo-sponsor align-self-center">
        <img
          :src="`src/assets/img/${sponsor.url}`"
          alt=""
          src="../assets/img/client-1-1.png" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
section {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
</style>
