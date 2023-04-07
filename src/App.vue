<template>
  <div id="app">
    <tx-preloader v-if="isLoading" :progress="progress" />

    <main class="main" v-else>
      <router-view />
    </main>
  </div>
</template>

<script>
import TxPreloader from "./components/atoms/TxPreloader.vue";

export default {
  components: {
    TxPreloader,
  },
  data() {
    return {
      isLoading: true,
      progress: 0,
    };
  },
  mounted() {
    const preloadInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress++;
      } else {
        clearInterval(preloadInterval);
        this.isLoading = false;
      }
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: $spacing-800 $spacing-400 0;
}
</style>
