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
  <div class="ms_container">
    <div class="row justify-content-between mt-5">
      <AppBlogWidePost
        v-for="blogPostObj in store.blogWidePosts"
        :post="blogPostObj" />
      <AppBlogSmallPost
        v-for="blogPostObj in store.blogSmallPosts"
        :post="blogPostObj" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>
