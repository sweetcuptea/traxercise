<template>
  <div class="progress-bar-container" :class="{ complete: progress >= 100 }">
    <div class="progress-bar">
      <div class="loader" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      require: true,
    },
  },
  watch: {
    progress(val) {
      if (val >= 100) {
        setTimeout(() => {
          this.$emit("complete");
        }, 300);
      }
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
