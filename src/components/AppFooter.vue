<script>
import AppFunnel from "./AppFunnel.vue";

export default {
  data() {
    return {};
  },
  components: { AppFunnel },
};
</script>

<template>
  <footer><AppFunnel /></footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

footer {
  min-height: 1000px;
  background-color: $bgBlue;
}
</style>
