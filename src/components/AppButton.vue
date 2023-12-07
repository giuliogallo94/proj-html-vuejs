<script>
export default {
  data() {
    return {};
  },
  props: {
    btnText: String,
    btnClass: String,
    btnTextClass: String,
  },
};
</script>

<template>
  <div class="ms_button rounded-pill d-flex" :class="btnClass">
    <button
      class="rounded-pill"
      :class="btnTextClass"
      @click="$emit(`buttonMethod`)">
      <a class="text-decoration-none"> {{ btnText }}</a>
    </button>
    <div class="arrow ms-4">&rarr;</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_button {
  width: fit-content;
  button {
    border: none;
    background-color: transparent;
  }
  a {
    color: white;
    font-size: 17px;
  }

  .arrow {
    display: none;
  }
}
.btnBlue {
  background: $bgGradientBlue;

  &:hover {
    background: $bgGradientPink;
  }
}
.btnPink {
  background: $bgGradientPink;

  &:hover {
    background: $bgGradientBlue;
  }
}

.btnPinkArrow {
  background: $bgGradientPink;
  .arrow {
    display: block;
    color: white;
  }
}

.btnWhite {
  background-color: white;

  a {
    color: rgba(0, 0, 0, 0.616);
  }
}

.btnWhiteArrow {
  background-color: white;

  a {
    color: $mainPink;
  }

  .arrow {
    display: block;
    color: $mainPink;
  }
}

.navBtn {
  padding: 0.4rem 1.4rem;
}

.pageBtn {
  padding: 0.4rem 2rem;
}

.arrowBtn {
  background: $bgGradientPink;
  padding: 0.5rem;
  button {
    a {
      font-size: 25px;
    }
  }
}
.priceBtn {
  button {
    .a {
      font-weight: bold;
    }
  }
}
</style>
