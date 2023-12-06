<script>
import { store } from "../store";
export default {
  data() {
    return { store, msgToSend: "" };
  },
  props: {},
  methods: {
    sendMsg: function () {
      if (this.msgToSend.length > 0) {
        let messagesList = this.store.chat.messages;
        messagesList.push({
          message: this.msgToSend,
          status: "sent",
        });
        this.msgToSend = "";
      }
    },
  },
};
</script>

<template>
  <!-- ACTIVE CONTACT INFO -->

  <div class="chat-live rounded-5">
    <div class="header-chat d-flex align-items-center p-3">
      <img src="../assets/img/cropped-cropped-icon-270x270.png" alt="" />
      <h5 class="ms-3 mb-0">Chat Bot Live</h5>
    </div>

    <!-- //ACTIVE CONTACT INFO -->

    <!-- CHAT SPACE -->
    <div class="messages-container">
      <div class="messages d-flex flex-column h-100 p-3">
        <!-- ACTIVE CHAT -->
        <div
          v-for="(msg, index) in store.chat.messages"
          :class="`message ${msg.status}`">
          <span> {{ msg.message }} </span>
        </div>
        <!-- //ACTIVE CHAT -->
      </div>
    </div>
    <!-- //SPAZIO CHAT -->
    <!-- INPUT CHAT BAR -->
    <div
      class="footer-chat d-flex align-items-center p-2 ps-3"
      @keyup.enter="sendMsg">
      <div class="footer-icon me-3">
        <i class="fa-solid fa-paperclip"></i>
      </div>
      <input
        class="new-message-inputs w-75"
        placeholder="Scrivi un messaggio"
        v-model.trim="msgToSend" />
    </div>
  </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
@import "@fortawesome/fontawesome-free/css/all.css";

.chat-live {
  position: fixed;
  right: 4%;
  bottom: 5%;
  width: 25vw;
  height: 60vh;
  border: 1px solid white;

  .header-chat {
    background-color: $bgBlue;
    color: white;
    height: 15%;
    border-radius: 2rem 2rem 0 0;

    img {
      max-width: 10%;
    }
  }

  .messages-container {
    background-color: white;
    height: 75%;

    .messages {
      overflow-y: scroll;

      .message {
        margin: 5px 0;
        padding: 15px 15px 20px 15px;
        min-width: 40%;
        max-width: 60%;
        background: $bgBlue;
        border-radius: 10px;
        font-size: 15px;
        color: white;
      }

      .sent {
        align-self: flex-end;
      }
    }
  }

  .footer-chat {
    color: white;
    height: 10%;
    background-color: $bgBlue;
    border-radius: 0 0 2rem 2rem;
  }
}
</style>
