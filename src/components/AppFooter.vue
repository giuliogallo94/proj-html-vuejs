<script>
import AppFunnel from "./AppFunnel.vue";
import AppTopFooter from "./AppTopFooter.vue";

export default {
  data() {
    return {};
  },
  components: { AppFunnel, AppTopFooter },
};
</script>

<template>
  <footer class="pb-5">
    <AppFunnel />
    <AppTopFooter />
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

footer {
  background-color: #060634;
}
</style>
