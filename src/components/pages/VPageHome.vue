<template>
  <section class="page-home">
    <h5 class="page-home__title">Traxercise</h5>
    <div class="page-home__empty-list">
      <v-icon-barble-off class="page-home__icon" />
      <p class="page-home__description">you have no exercise</p>
    </div>
    <v-button-create-exercise />
    <v-navigation />
  </section>
</template>

<script>
import { VIconBarbleOff } from "../atoms/IconComponents";
import VNavigation from "../molecules/VNavigation.vue";
import VButtonCreateExercise from "../atoms/VButtonCreateExercise.vue";

export default {
  name: "VPageHome",
  components: {
    VIconBarbleOff,
    VNavigation,
    VButtonCreateExercise,
  },
};
</script>

<style lang="scss" scoped>
.page-home {
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
