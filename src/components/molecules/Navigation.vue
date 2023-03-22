<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>
          <tx-home-icon />
          <span :class="{ active: isActive('/') }"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/history" exact>
          <tx-calendar-time-icon />
          <span :class="{ active: isActive('/exercise-history') }"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart" exact>
          <tx-chart-icon />
          <span :class="{ active: isActive('/chart') }"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import HomeIcon from "../atoms/HomeIcon.vue";
import CalendarTimeIcon from "../atoms/CalendarTimeIcon.vue";
import ChartIcon from "../atoms/ChartIcon.vue";

export default {
  name: "Navigation",
  components: {
    "tx-calendar-time-icon": CalendarTimeIcon,
    "tx-chart-icon": ChartIcon,
    "tx-home-icon": HomeIcon,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return (routePath) => {
        return this.$route.path === routePath;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
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
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    color: $accent-color-100;
  }
  .active {
    width: 80%;
    height: 2.5px;
    margin: 0 auto;
    display: block;
    background-color: $light-color-200;
    border-radius: $radius-100;
  }
}
</style>
