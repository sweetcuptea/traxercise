<template>
  <nav class="nav">
    <ul class="nav__ul">
      <li v-for="menu in menus" class="nav__li" :key="menu.id">
        <router-link :to="menu.pathUrl" exact>
          <component :is="menu.iconComponent" class="nav__icon" />
          <div
            :class="{ 'nav__li--is-active': $route.path === menu.pathUrl }"
          ></div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  VIconSmartHome,
  VIconCalendarTime,
  VIconChartAreaLine,
} from "../atoms/IconComponents";

export default {
  name: "VNavigation",
  components: {
    VIconSmartHome,
    VIconCalendarTime,
    VIconChartAreaLine,
  },
  data() {
    return {};
  },
  computed: {
    menus() {
      return [
        {
          pathUrl: "/traxercise",
          iconComponent: "v-icon-smart-home",
        },
        {
          pathUrl: "",
          iconComponent: "v-icon-calendar-time",
        },
        {
          pathUrl: "",
          iconComponent: "v-icon-chart-area-line",
        },
      ];
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
