<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  props: {},
};
</script>

<template>
  <div class="top-footer pb-5">
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
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="col-3 col-resources">
          <h6><b>Resources</b></h6>
          <ul class="list-group list-unstyled lh-lg text-center">
            <li><a href="#">Art Design</a></li>
            <li><a href="#">Computer</a></li>
            <li><a href="#">IT News</a></li>
            <li><a href="#">Networking</a></li>
            <li><a href="#">Web Security</a></li>
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
      font-size: 15px;
      color: #ffffff80;
    }
    h6 {
      color: white;
    }

    ul {
      li {
        font-size: 15px;
        color: #ffffff80;

        a {
          text-decoration: none;
          color: #ffffff80;
        }
      }
      .white-text {
        color: white;
        font-size: 15px;
      }
    }
  }
}
</style>
