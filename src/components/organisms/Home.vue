<template>
  <section class="home-container">
    <h5>Traxercise</h5>
    <div class="empty-list">
      <tx-barble-icon />
      <p>you have no exercise</p>
    </div>

    <tx-add-button />
    <tx-navigation />
  </section>
</template>

<script>
import BarbleIcon from "../atoms/BarbleIcon.vue";
import Navigation from "../molecules/Navigation.vue";
import AddButton from "../atoms/AddButton.vue";

export default {
  name: "Home",
  components: {
    "tx-barble-icon": BarbleIcon,
    "tx-navigation": Navigation,
    "tx-add-button": AddButton,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  height: auto;
  h5 {
    margin-bottom: $spacing-700;
    text-align: center;
  }

  .empty-list {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: $spacing-300;
    svg {
      width: 64px;
      height: 64px;
    }
    p {
      font-size: $paragraph-large;
    }
  }
}
</style>
