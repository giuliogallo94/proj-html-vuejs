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

<style scoped></style>
