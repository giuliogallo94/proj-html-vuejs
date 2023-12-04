<script>
import AppTopHeader from "./AppTopHeader.vue";
import AppBottomHeader from "./AppBottomHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppTopHeader,
    AppBottomHeader,
  },
};
</script>

<template>
  <header>
    <AppTopHeader />
    <AppBottomHeader />
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

header {
  background-color: $bgBlue;
}
</style>
