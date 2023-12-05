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
  <div class="bottom-footer">
    <div class="ms_container d-flex justify-content-between align-items-center">
      <div class="copyright">
        <p class="mb-0">&copy; {{ store.copyrights }}</p>
      </div>
      <div class="socials d-flex justify-content-between">
        <ul class="list-group list-group-horizontal list-unstyled">
          <li v-for="socialLogo in store.socials">
            <i class="fa-brands mx-3" :class="`${socialLogo.icon}`"></i>
          </li>
        </ul>
        <div class="go-up rounded-5 px-1">
          <span> &uarr; </span>
        </div>
        <div class="chat-live rounded-5">
          <i class="fa-regular fa-comment fa-flip-horizontal"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@import "@fortawesome/fontawesome-free/css/all.css";

.bottom-footer {
  position: relative;
  font-size: 15px;
  color: #ffffff80;

  ul {
    li {
      i {
        color: white;
      }
    }
  }

  .go-up {
    background-color: white;
    width: fit-content;
    position: absolute;
    top: 0%;
    right: 5%;
    span {
      color: #060634;
    }
  }

  .chat-live {
    background-color: #527ceb;
    font-size: 20px;
    color: white;
    position: absolute;
    right: 1%;
    bottom: 10%;
    i {
      padding: 0.8rem;
    }
  }
}
</style>
