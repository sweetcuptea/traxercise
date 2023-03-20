<template>
  <div id="app">
    <tx-progress-bar v-if="loading" :progress="progressLoad" />

    <main v-else>
      <router-view />
    </main>
  </div>
</template>

<script>
import ProgressBar from "./components/atoms/ProgressBar.vue";

export default {
  components: {
    "tx-progress-bar": ProgressBar,
    "tx-navigation": Navigation,
  },
  data() {
    return {
      loading: true,
      progressLoad: 0,
      progressBar: null,
    };
  },
  methods: {
    startProgressBar() {
      this.progressBar = setInterval(() => {
        if (this.progressLoad < 100) {
          this.progressLoad += 1;
        }
      }, 10);
    },
    stopProgressBar() {
      clearInterval(this.ProgressBar);
      this.progressBar = null;
      this.progressLoad = 100;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
  },
  mounted() {
    this.startProgressBar();
    window.addEventListener("load", this.stopProgressBar);
  },
  beforeDestroy() {
    window.addEventListener("load", this.stopProgressBar);
    clearInterval(this.progressBar);
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: $spacing-800 $spacing-400 0;
}
</style>
