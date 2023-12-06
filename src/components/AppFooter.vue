<script>
import AppBottomFooter from "./AppBottomFooter.vue";
import AppChatLive from "./AppChatLive.vue";
import AppFunnel from "./AppFunnel.vue";
import AppTopFooter from "./AppTopFooter.vue";

export default {
  data() {
    return {};
  },
  components: { AppFunnel, AppTopFooter, AppBottomFooter, AppChatLive },
};
</script>

<template>
  <footer>
    <AppFunnel />
    <AppTopFooter />
    <AppBottomFooter />
    <AppChatLive />
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

footer {
  position: relative;
  background-color: #060634;
}
</style>
