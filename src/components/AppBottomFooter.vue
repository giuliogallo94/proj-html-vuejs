<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },

  methods: {
    showChat() {
      if (this.store.chatLive == false) {
        this.store.chatLive = true;
      } else {
        this.store.chatLive = false;
      }
    },
  },
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
        <div class="go-up d-none d-xl-block rounded-5 px-1">
          <a href="#Home" class="px-1"> &uarr; </a>
        </div>
        <div
          class="chat-logo rounded-5"
          :class="store.chatLive ? `logo-fixed` : ``"
          @click="showChat">
          <i
            v-if="store.chatLive == false"
            class="fa-regular fa-comment fa-flip-horizontal"></i>
          <i v-if="store.chatLive" class="fa-regular fa-x"></i>
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
    a {
      color: #060634;
    }
  }

  .chat-logo {
    background-color: #527ceb;
    font-size: 20px;
    color: white;
    position: absolute;
    bottom: 120%;
    right: 1%;

    i {
      padding: 0.8rem;
    }
  }
  @media screen and (min-width: 992px) {
    .chat-logo {
      right: 1%;
      bottom: 8%;
    }
  }

  .logo-fixed {
    position: fixed;
    right: 1%;
    bottom: 0.5%;
  }
}
</style>
