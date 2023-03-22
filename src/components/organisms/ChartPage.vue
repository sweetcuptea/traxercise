<template>
  <div>
    <h5>Chart</h5>
    <tx-navigation />
  </div>
</template>

<script>
import Navigation from "../molecules/Navigation.vue";

export default {
  name: "chart",
  components: {
    "tx-navigation": Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
