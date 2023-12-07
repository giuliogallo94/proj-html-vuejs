<script>
import { store } from "../store";
import AppBlogSmallPost from "./AppBlogSmallPost.vue";
import AppBlogWidePost from "./AppBlogWidePost.vue";

export default {
  data() {
    return { store };
  },
  components: { AppBlogSmallPost, AppBlogWidePost },
};
</script>

<template>
  <div class="row justify-content-center justify-content-xl-between mt-5">
    <AppBlogWidePost
      v-for="blogPostObj in store.blogWidePosts"
      :post="blogPostObj" />
    <AppBlogSmallPost
      v-for="blogPostObj in store.blogSmallPosts"
      :post="blogPostObj" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
