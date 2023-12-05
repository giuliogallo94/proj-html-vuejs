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
    class="col-5 rounded-5 wider-post p-4 text-start d-flex justify-content-between align-items-end">
    <div class="post-content">
      <p class="post-p">{{ post.date }} &middot; by {{ post.author }}</p>
      <h6>{{ post.title }}</h6>
      <p class="post-p m-0">{{ post.paragraph }}</p>
    </div>
    <div class="button">
      <AppButton btnText="Read More" btnClass="btnWhite pageBtn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.wider-post {
  background-image: url(../assets/img/headway-537308-unsplash-1380x703.jpg);
  background-size: cover;
  color: white;
  position: relative;
  z-index: -2;

  // Create background-image shadow
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
    border-radius: 2rem;
  }
  .post-p {
    font-size: 13px;
  }
}
</style>
