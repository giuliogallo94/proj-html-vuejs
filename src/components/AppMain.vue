<script>
import AppServices from "./AppServices.vue";
import AppStartProject from "./AppStartProject.vue";
import AppPricing from "./AppPricing.vue";
import AppBlog from "./AppBlog.vue";
import AppTestimonial from "./AppTestimonial.vue";
import AppClients from "./AppClients.vue";
import AppPortfolio from "./AppPortfolio.vue";
import AppCarouselProva from "./AppCarouselProva.vue";

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
    AppCarouselProva,
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
  <AppCarouselProva />
</template>

<style scoped></style>
