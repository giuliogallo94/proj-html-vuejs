<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppButton,
  },
};
</script>

<template>
  <div class="ms_container d-flex justify-content-between align-items-center">
    <div class="logo">
      <img src="../assets/img/white-logo-2.png" alt="" />
    </div>
    <div class="ms_navbar d-flex justify-content-between align-items-center">
      <!-- NavLinks -->
      <div>
        <ul class="list-group list-group-horizontal list-unstyled">
          <li v-for="link in store.navLinks" class="mx-2">
            <a :href="link.url" class="text-decoration-none ms_nav-links">
              {{ link.linkName }}
            </a>
          </li>
        </ul>
      </div>
      <!-- // NavLinks -->
      <!-- Sign In Button -->
      <AppButton btnText="Sign In" btnColor="btnBlue navBtn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ms_container {
  .ms_navbar {
    a {
      color: white;
    }
  }
}
</style>
