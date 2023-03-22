<template>
  <button
    :class="buttonClass"
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
    primary: {
      type: Boolean,
      default: true,
    },
    secondary: Boolean,
    tertiary: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    buttonClass() {
      if (this.secondary) {
        return "secondary-button";
      } else if (this.tertiary) {
        return "tertiary-button";
      } else {
        return "primary-button";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: auto;
  height: auto;
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
  background: $accent-color-100;
  color: $dark-color-100;
  border: 2px solid $accent-color-100;
  border-radius: $radius-100;
}
.primary-button:hover,
.primary-button:active {
  background-color: $accent-color-200;
  border: 2px solid $accent-color-200;
  box-shadow: $shadow;
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
  box-shadow: $shadow;
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

.tertiary-button {
  color: $light-color-200;
  background-color: $dark-color-200;
  border: 2px solid $dark-color-200;
  border-radius: $radius-100;
  box-shadow: $shadow;
  svg {
    color: $accent-color-100;
  }
}
.tertiary-button:hover,
.tertiary-button:active {
  background-color: $dark-color-300;
  border: 2px solid $dark-color-300;
  svg {
    color: $accent-color-200;
  }
}
.tertiary-button:focus {
  outline: none;
}
</style>
