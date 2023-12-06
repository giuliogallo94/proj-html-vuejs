<script>
import AppServices from "./AppServices.vue";
import AppStartProject from "./AppStartProject.vue";
import AppPricing from "./AppPricing.vue";
import AppBlog from "./AppBlog.vue";
import AppTestimonial from "./AppTestimonial.vue";
import AppClients from "./AppClients.vue";
import AppPortfolio from "./AppPortfolio.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppServices,
    AppStartProject,
    AppPricing,
    AppBlog,
    AppTestimonial,
    AppClients,
    AppPortfolio,
  },
};
</script>

<template>
  <AppServices />
  <AppStartProject />
  <AppPortfolio />
  <AppPricing />
  <AppBlog />
  <AppTestimonial />
  <AppClients />
</template>

<style scoped></style>
