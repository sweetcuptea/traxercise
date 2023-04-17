<template>
  <nav class="nav">
    <ul class="nav__ul">
      <li>
        <router-link to="/" exact>
          <v-smart-home-icon class="nav__icon" />
          <span :class="isActive('/')"></span>
        </router-link>
      </li>
      <li>
        <router-link to="" exact>
          <v-calendar-time-icon class="nav__icon" />
          <span :class="isActive('')"></span>
        </router-link>
      </li>
      <li>
        <router-link to="" exact>
          <v-chart-area-line-icon class="nav__icon" />
          <span :class="isActive('')"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  VSmartHomeIcon,
  VCalendarTimeIcon,
  VChartAreaLineIcon,
} from "../atoms/IconComponents";

export default {
  name: "VNavigation",
  components: {
    VSmartHomeIcon,
    VCalendarTimeIcon,
    VChartAreaLineIcon,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return (routePath) => {
        return this.$route.path === routePath ? "nav__li--is-active" : "";
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: auto;
  padding: $spacing-200 $spacing-600;
  margin: $spacing-500 $spacing-400;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: $dark-color-200;
  border-radius: $radius-200;
  box-shadow: $shadow;
  z-index: 9999;

  &__ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    color: $accent-color-100;
  }

  &__li--is-active {
    width: 80%;
    height: 2.5px;
    margin: 0 auto;
    display: block;
    background-color: $light-color-200;
    border-radius: $radius-100;
  }
}
</style>
