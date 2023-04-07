<template>
  <section class="homepage">
    <h5 class="homepage__title">Traxercise</h5>
    <div class="homepage__empty-list">
      <tx-barble-icon class="homepage__icon" />
      <p class="homepage__description">you have no exercise</p>
    </div>
  </section>
</template>

<script>
import TxBarbleIcon from "../atoms/TxBarbleIcon.vue";

export default {
  name: "TxHomepage",
  components: {
    TxBarbleIcon,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: auto;

  &__title {
    margin-bottom: $spacing-700;
    text-align: center;
  }

  &__empty-list {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: $spacing-300;
  }

  &__icon {
    width: 64px;
    height: 64px;
  }

  &__description {
    font-size: $paragraph-large;
  }
}
</style>
