<script>
import AppBlogArticlesCard from "./AppBlogArticlesCard.vue";

export default {
  data() {
    return {};
  },
  components: { AppBlogArticlesCard },
};
</script>

<template>
  <section id="Blog">
    <div class="ms_container text-center">
      <div class="title pb-5">
        <p class="up-title">Blog</p>
        <h2><b>Latest</b> Posts</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface.
        </p>
      </div>

      <AppBlogArticlesCard />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

section {
  padding-top: 25rem;
}
</style>
