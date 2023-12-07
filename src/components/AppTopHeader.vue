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
  methods: {
    // selectedLink(link, index) {
    //   {
    //     for (link = 0; link < this.store.navLinks.length; link++) {
    //       this.store.navLinks[link].isSelected = false;
    //     }
    //     this.store.navLinks[index].isSelected = true;
    //   }
    // },
  },
};
</script>

<template>
  <div class="ms_container" id="Home">
    <div class="header-top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="../assets/img/white-logo-2.png" alt="" />
      </div>
      <div class="ms_navbar d-flex justify-content-between align-items-center">
        <!-- NavLinks -->
        <div class="me-4">
          <ul class="list-group list-group-horizontal list-unstyled">
            <AppMenu
              :linksArray="this.navLinks"
              liClass="mx-2 linkNav"
              selectedClass="mx-2 selected"
              :sectionTag="this.navLinks.linkName" />
            <!-- <li
              v-for="(link, index) in store.navLinks"
              class="mx-2"
              :class="link.isSelected ? `selected` : ``"
              @click="selectedLink(index, index)">
              <a :href="link.url" class="text-decoration-none ms_nav-links">
                {{ link.linkName }}
              </a>
            </li> -->
          </ul>
        </div>
        <!-- // NavLinks -->
        <!-- Sign In Button -->
        <AppButton btnText="Sign In" btnClass="btnBlue navBtn" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_container {
  .ms_navbar {
    a {
      color: white;
    }
  }

  li:hover a {
    color: $mainPink;
  }

  .selected {
    a {
      color: $mainPink;
      font-weight: bold;
    }
  }
}
</style>
