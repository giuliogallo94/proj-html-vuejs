<script>
export default {
  data() {
    return {};
  },
  props: {
    testimonial: String,
  },
};
</script>

<template>
  <div class="col-10 col-xl-3 mb-4 mb-xl-0">
    <div class="testimonial-card text-center p-4 p-xl-3 rounded-5">
      <img :src="`src/assets/img/${testimonial.image}`" alt="" />
      <div class="stars-vote my-5">
        <i v-for="i in testimonial.vote" class="fa-solid fa-star"></i>
        <i v-for="i in 5 - testimonial.vote" class="fa-regular fa-star"></i>
        <div class="absolute-span">
          <span> &ldquo;</span>
        </div>
      </div>
      <p class="w-75 mx-auto">{{ testimonial.comment }}</p>
      <p class="mb-1">
        <b>{{ testimonial.name }}</b>
      </p>

      <p>{{ testimonial.position }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@import "@fortawesome/fontawesome-free/css/all.css";

.testimonial-card {
  border: 1px solid #b6246e;

  img {
    max-width: 25%;
    border: 5px solid #b6246e;
    border-radius: 50%;
  }

  .stars-vote {
    position: relative;
    i {
      color: $mainPink;
    }

    .absolute-span {
      position: absolute;
      font-size: 250px;
      top: -320%;
      left: 40%;
      color: rgba(0, 0, 0, 0.1);
    }
  }
}

@media screen and (min-width: 1200px) {
  .testimonial-card {
    border: none;
  }
}
</style>
