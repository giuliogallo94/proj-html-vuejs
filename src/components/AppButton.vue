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
    <button class="rounded-pill" :class="btnTextClass">
      <a href="" class="text-decoration-none"> {{ btnText }}</a>
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
  background: linear-gradient(
    90deg,
    $mainBlue 0%,
    rgba(18, 109, 166, 1) 50%,
    rgba(29, 66, 134, 1) 100%
  );

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(200, 54, 109, 1) 0%,
      rgba(212, 64, 109, 1) 50%,
      $mainPink 100%
    );
  }
}
.btnPink {
  background: linear-gradient(
    90deg,
    rgba(200, 54, 109, 1) 0%,
    rgba(212, 64, 109, 1) 50%,
    $mainPink 100%
  );

  &:hover {
    background: linear-gradient(
      90deg,
      $mainBlue 0%,
      rgba(18, 109, 166, 1) 50%,
      rgba(29, 66, 134, 1) 100%
    );
  }
}

.btnPinkArrow {
  background: linear-gradient(
    90deg,
    rgba(200, 54, 109, 1) 0%,
    rgba(212, 64, 109, 1) 50%,
    $mainPink 100%
  );
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
  background: linear-gradient(
    90deg,
    rgba(200, 54, 109, 1) 0%,
    rgba(212, 64, 109, 1) 50%,
    $mainPink 100%
  );
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
