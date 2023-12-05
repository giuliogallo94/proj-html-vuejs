<script>
import AppBottomFooter from "./AppBottomFooter.vue";
import AppFunnel from "./AppFunnel.vue";
import AppTopFooter from "./AppTopFooter.vue";

export default {
  data() {
    return {};
  },
  components: { AppFunnel, AppTopFooter, AppBottomFooter },
};
</script>

<template>
  <footer>
    <AppFunnel />
    <AppTopFooter />
    <AppBottomFooter />
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

footer {
  background-color: #060634;
}
</style>
