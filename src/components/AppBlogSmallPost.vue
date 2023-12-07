<script>
import AppButton from "./AppButton.vue";
export default {
  data() {
    return {};
  },
  components: { AppButton },
  props: {
    post: String,
  },
};
</script>

<template>
  <div
    class="col-8 col-xl-3 rounded-5 small-post px-4 py-5 text-start d-flex flex-column justify-content-between mb-4 mb-xl-0">
    <div class="post-content mb-3">
      <p class="post-p">{{ post.date }} &middot; by {{ post.author }}</p>
      <h6>{{ post.title }}</h6>
      <p class="post-p mt-4">{{ post.paragraph }}</p>
    </div>
    <AppButton btnText="Read More" btnClass="btnWhite pageBtn" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.small-post {
  background-color: $bgBlue;
  color: white;

  .post-p {
    font-size: 13px;
  }
}
</style>
