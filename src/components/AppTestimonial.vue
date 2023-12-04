<script>
import { store } from "../store";
import AppTestimonialCard from "./AppTestimonialCard.vue";
export default {
  data() {
    return { store };
  },
  params: {
    AppTestimonialCard,
  },
  components: { AppTestimonialCard },
};
</script>

<template>
  <section>
    <div class="ms_container">
      <div class="title text-center pb-5">
        <p class="up-title">Testimonial</p>
        <h2><b>What</b> people say</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface.
        </p>
      </div>
      <div class="row justify-content-center">
        <AppTestimonialCard
          v-for="testimonialObj in store.testimonials"
          :testimonial="testimonialObj" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
