t
<template>
  <div class="progress-bar-container">
    <div class="progress-bar">
      <div class="loader" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
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
.progress-bar-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress-bar {
    width: 30vw;
    height: 8px;
    background-color: $dark-color-300;
    border-radius: $radius-100;

    .loader {
      height: 8px;
      background-color: $accent-color-100;
      border-radius: $radius-100;
    }
  }
}
</style>
