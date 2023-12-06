<script>
export default {
  data() {
    return {};
  },
  props: {
    linksArray: Array,
    liClass: String,
    selectedClass: String,
  },
  methods: {
    selectedLink(link, index) {
      {
        for (link = 0; link < this.linksArray.length; link++) {
          this.linksArray[link].isSelected = false;
        }
        this.linksArray[index].isSelected = true;
      }
    },
  },
};
</script>

<template>
  <li
    v-for="(link, index) in linksArray"
    :class="link.isSelected ? selectedClass : liClass"
    :key="index"
    @click="selectedLink(index, index)">
    <a :href="link.url">{{ link.linkName }}</a>
  </li>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;

li {
  a {
    font-size: 15px;
    text-decoration: none;
  }
}
.footer-links {
  a {
    color: #ffffff80;

    &:hover {
      color: #ffffff80;
    }
  }
}
.selected {
  a {
    color: $mainPink;
    font-weight: bold;

    &:hover {
      color: $mainPink;
    }
  }
}

.linkNav {
  a {
    color: white;

    &:hover {
      color: $mainPink;
    }
  }
}
</style>
