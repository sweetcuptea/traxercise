<template>
  <section>
    <tx-convetti-icon />
    <div class="action">
      <router-link to="/" exact>
        <tx-button width="100%" text="next exercise" tertiary />
      </router-link>
    </div>
  </section>
</template>

<script>
import ConvettiIcon from "../atoms/ConfettiIcon.vue";
import Button from "../atoms/Button.vue";

export default {
  name: "DonePage",
  components: {
    "tx-button": Button,
    "tx-convetti-icon": ConvettiIcon,
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 128px;
    height: 128px;
    color: $accent-color-100;
  }
  .action {
    padding: $spacing-100 0px $spacing-500 0px;
    margin: 0 $spacing-400;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
