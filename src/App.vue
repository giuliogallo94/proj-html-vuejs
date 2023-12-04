<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  // mounted() {
  //   for (let i = 0; i < this.store.pricingCard.length; i++) {
  //     for (let x = 0; x < this.store.pricingCard[i].optionInfo.length; x++)
  //       console.log(this.store.pricingCard[i].optionInfo[x].title);
  //   }
  // },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./style/partials/variables" as *;
@use "./style/general.scss";
</style>
