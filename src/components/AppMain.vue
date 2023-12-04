<script>
import AppServices from "./AppServices.vue";
import AppStartProject from "./AppStartProject.vue";
import AppPricing from "./AppPricing.vue";

export default {
  data() {
    return {};
  },
  components: { AppServices, AppStartProject, AppPricing },
};
</script>

<template>
  <AppServices />
  <AppStartProject />
  <AppPricing />
</template>

<style scoped></style>
