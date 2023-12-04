<script>
import AppServices from "./AppServices.vue";
import AppStartProject from "./AppStartProject.vue";
import AppPricing from "./AppPricing.vue";
import AppBlog from "./AppBlog.vue";
import AppTestimonial from "./AppTestimonial.vue";

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
  },
};
</script>

<template>
  <AppServices />
  <AppStartProject />
  <AppPricing />
  <AppBlog />
  <AppTestimonial />
</template>

<style scoped></style>
