<template>
  <router-link to="/traxercise/create-exercise" exact>
    <button class="button-create-exercise">
      <v-icon-plus class="button-create-exercise__icon" />
    </button>
  </router-link>
</template>

<script>
import { VIconPlus } from "./IconComponents";

export default {
  name: "VCreateExerciseButton",
  components: {
    VIconPlus,
  },
};
</script>

<style lang="scss" scoped>
.button-create-exercise {
  width: auto;
  height: auto;
  position: fixed;
  right: 36px;
  bottom: 100px;
  background: none;
  border: none;
  outline: none;
  z-index: 9999;

  &__icon {
    width: 40px;
    height: 40px;
    padding: 8px;
    color: $dark-color-100;
    background-color: $accent-color-100;
    border-radius: 100%;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: $accent-color-200;
    }
  }
}
</style>
