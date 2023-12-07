<script>
import { store } from "../store";
import AppButton from "./AppButton.vue";
import AppMenu from "./AppMenu.vue";
export default {
  data() {
    return {
      store,
      navLinks: [
        {
          linkName: "Home",
          url: "#",
          isSelected: true,
        },
        {
          linkName: "About",
          url: "#",
          isSelected: false,
        },
        {
          linkName: "Services",
          url: "#",
          isSelected: false,
        },
        {
          linkName: "Blog",
          url: "#",
          isSelected: false,
        },
        {
          linkName: "Contact",
          url: "#",
          isSelected: false,
        },
        {
          linkName: "Portfolio",
          url: "#",
          isSelected: false,
        },
      ],
    };
  },
  components: {
    AppButton,
    AppMenu,
  },
};
</script>

<template>
  <nav>
    <div class="ms_container" id="Home">
      <div class="header-top d-flex justify-content-between align-items-center">
        <div class="logo">
          <img
            src="../assets/img/white-logo-2.png"
            alt=""
            class="d-none d-xl-block" />
          <img
            src="../assets/img/white-logo-small.png"
            alt=""
            class="d-xl-none" />
        </div>

        <div
          class="ms_navbar d-flex justify-content-between align-items-center">
          <!-- NavLinks -->
          <div class="me-4 d-none d-md-block">
            <ul class="list-group list-group-horizontal list-unstyled">
              <AppMenu
                :linksArray="this.navLinks"
                liClass="mx-2 linkNav"
                selectedClass="mx-2 selected"
                :sectionTag="this.navLinks.linkName" />
            </ul>
          </div>

          <!-- Sign In Button -->
          <AppButton btnText="Sign In" btnClass="btnBlue navBtn" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
