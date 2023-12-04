<script>
export default {
  data() {
    return {};
  },
  props: {
    btnText: String,
    btnClass: String,
  },
};
</script>

<template>
  <div class="ms_button">
    <button class="rounded-pill" :class="btnClass">
      <a href="" class="text-decoration-none"> {{ btnText }}</a>
    </button>
  </div>
</template>
/Users/ggallo/Desktop/corporate-landing/screencapture.png
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_button {
  //   width: fit-content;
  button {
    border: none;
  }
  a {
    color: white;
    font-size: 17px;
  }
}
.btnBlue {
  background: linear-gradient(
    90deg,
    $mainBlue 0%,
    rgba(18, 109, 166, 1) 50%,
    rgba(29, 66, 134, 1) 100%
  );
}
.btnPink {
  background: linear-gradient(
    90deg,
    rgba(200, 54, 109, 1) 0%,
    rgba(212, 64, 109, 1) 50%,
    $mainPink 100%
  );
}

.btnWhite {
  background-color: white;

  a {
    color: rgba(0, 0, 0, 0.616);
  }
}

.navBtn {
  padding: 0.4rem 1.4rem;
}

.pageBtn {
  padding: 0.4rem 2rem;
}
</style>
