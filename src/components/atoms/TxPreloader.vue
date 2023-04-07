<template>
  <div class="preloader">
    <div class="preloader__bar">
      <div class="preloader__fill" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TxPreloader",
  data() {
    return {};
  },
  props: {
    progress: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__bar {
    width: 30vw;
    height: 8px;
    background-color: $dark-color-300;
    border-radius: $radius-100;
  }

  &__fill {
    height: 8px;
    background-color: $accent-color-100;
    border-radius: $radius-100;
  }
}
</style>
