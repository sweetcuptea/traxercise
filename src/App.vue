<template>
  <div id="app">
    <tx-preloader v-if="preload" :progress="progress" />

    <main v-else>
      <h1>hello world</h1>
    </main>
  </div>
</template>

<script>
import Preloader from "./assets/components/atoms/Preloader.vue";

export default {
  components: {
    "tx-preloader": Preloader,
  },
  data() {
    return {
      preload: true,
      progress: 0,
    };
  },
  mounted() {
    const preloadInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress++;
      } else {
        clearInterval(preloadInterval);
        this.preload = false;
      }
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: $spacing-800 $spacing-400 0;
}
</style>
