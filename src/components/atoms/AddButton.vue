<template>
  <router-link to="/add-exercises" exact>
    <button class="add-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-plus"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "AddButton",
};
</script>

<style lang="scss" scoped>
.add-button {
  width: auto;
  height: auto;
  position: fixed;
  right: 36px;
  bottom: 100px;
  background: none;
  border: none;
  outline: none;
  z-index: 9999;
  svg {
    width: 40px;
    height: 40px;
    padding: 8px;
    color: $dark-color-100;
    background-color: $accent-color-100;
    border-radius: 100%;
    cursor: pointer;
  }
}

svg:hover,
svg:active {
  background-color: $accent-color-200;
}
</style>
