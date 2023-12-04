<script>
import AppServices from "./AppServices.vue";
import AppStartProject from "./AppStartProject.vue";
import AppPricing from "./AppPricing.vue";
import AppBlog from "./AppBlog.vue";

export default {
  data() {
    return {};
  },
  components: { AppServices, AppStartProject, AppPricing, AppBlog },
};
</script>

<template>
  <AppServices />
  <AppStartProject />
  <AppPricing />
  <AppBlog />
</template>

<style scoped></style>
