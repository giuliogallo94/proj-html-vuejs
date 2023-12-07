<script>
import { store } from "../store";
import AppMenu from "./AppMenu.vue";
export default {
  data() {
    return {
      store,
      quickLinksArray: [
        {
          linkName: "Services",
          url: "#",
        },
        {
          linkName: "Contact",
          url: "#",
        },
        {
          linkName: "Blog",
          url: "#",
        },
      ],

      resourcesArray: [
        {
          linkName: "Art Design",
          url: "#",
        },
        {
          linkName: "Computer",
          url: "#",
        },
        {
          linkName: "IT NEWS",
          url: "#",
        },
        {
          linkName: "Networking",
          url: "#",
        },
        {
          linkName: "Web Security",
          url: "#",
        },
      ],
    };
  },
  props: {},
  components: { AppMenu },
};
</script>

<template>
  <div class="top-footer pb-5" id="Contact">
    <div class="ms_container">
      <div class="row">
        <div class="col-3">
          <img src="../assets/img/white-logo-2.png" alt="" />
          <p class="mt-4">
            When, while the lovely valley teems with vapour around meand the
            meridian sun strikes the upper surface.
          </p>
        </div>
        <div class="col-3">
          <h6><b>Quick Links</b></h6>
          <ul class="list-group list-unstyled lh-lg">
            <AppMenu :linksArray="quickLinksArray" liClass="footer-links" />
          </ul>
        </div>
        <div class="col-3">
          <h6><b>Resources</b></h6>
          <ul class="list-group list-unstyled lh-lg text-center">
            <AppMenu :linksArray="resourcesArray" liClass="footer-links" />
          </ul>
        </div>
        <div class="col-3">
          <h6><b>Contact Us</b></h6>
          <ul class="list-group list-unstyled lh-lg">
            <li class="mb-3">
              <span class="white-text">Address:</span>
              {{ store.ourContact.address }}
            </li>
            <li>
              <span class="white-text">Phone:</span>
              {{ store.ourContact.phone }}
            </li>
            <li>
              <span class="white-text">Email:</span>
              {{ store.ourContact.email }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.top-footer {
  padding-top: 10rem;
  border-bottom: 1px solid #ffffff80;

  .ms_container {
    p {
      color: #ffffff80;
    }
    h6 {
      color: white;
    }

    ul {
      li {
        color: #ffffff80;

        a {
          color: #ffffff80;
        }
      }
      .white-text {
        color: white;
      }
    }
  }
}
</style>
