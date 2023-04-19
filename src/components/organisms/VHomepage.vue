<template>
  <section class="homepage">
    <h5 class="homepage__title">Traxercise</h5>
    <div class="homepage__empty-list">
      <v-barble-off-icon class="homepage__icon" />
      <p class="homepage__description">you have no exercise</p>
    </div>
    <v-navigation />
  </section>
</template>

<script>
import { VBarbleOffIcon } from "../atoms/IconComponents";
import VNavigation from "../molecules/VNavigation.vue";

export default {
  name: "VHomepage",
  components: {
    VBarbleOffIcon,
    VNavigation,
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
