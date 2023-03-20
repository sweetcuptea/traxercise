<template>
  <button
    :class="buttonStyle !== 'secondary' ? 'primary-button' : 'secondary-button'"
    :style="{ width: width == null ? 'auto' : width }"
  >
    <slot></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    width: String,
    buttonStyle: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $spacing-100 $spacing-200;
  margin-top: $spacing-300;
  font-weight: 600;
  box-shadow: $shadow;
  cursor: pointer;
  svg {
    width: $spacing-600;
    height: $spacing-400;
    color: $dark-color-100;
    stroke-width: 4;
  }
}
.primary-button {
  background: linear-gradient(to right, #ff7b54, #ff9576);
  color: $dark-color-100;
  border: none;
  border-radius: $radius-100;
}
.primary-button:hover,
.primary-button:active {
  background-color: $accent-color-200;
  border: 2px solid $accent-color-200;
  svg {
    color: $dark-color-100;
  }
}
.primary-button:focus {
  outline: none;
}

.secondary-button {
  color: $accent-color-100;
  background-color: transparent;
  border: 2px solid $dark-color-300;
  border-radius: $radius-100;
  svg {
    color: $accent-color-100;
  }
}
.secondary-button:hover,
.secondary-button:active {
  color: $accent-color-200;
  border: 2px solid $light-color-100;
  svg {
    color: $accent-color-200;
  }
}
.secondary-button:focus {
  outline: none;
}
</style>
