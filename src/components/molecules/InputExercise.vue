<template>
  <div class="input-exercise-container">
    <div class="input-exercise-label">
      <h6>exercise</h6>
      <button>
        <tx-close-icon />
      </button>
    </div>
    <form>
      <input type="text" placeholder="exercise name" />
      <input type="text" placeholder="category" />
      <div class="weight-and-repetition">
        <input type="number" placeholder="weight" />
        <input type="number" placeholder="repetition" />
      </div>
    </form>
  </div>
</template>

<script>
import CloseIcon from "../atoms/CloseIcon.vue";

export default {
  name: "InputExercise",
  components: {
    "tx-close-icon": CloseIcon,
  },
};
</script>

<style lang="scss" scoped>
.input-exercise-container {
  width: 100%;
  height: auto;
  padding: $spacing-300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: $spacing-300;
  background-color: $dark-color-200;
  border-radius: $radius-100;

  .input-exercise-label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h6 {
      font-weight: 100;
      color: $light-color-200;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        color: $danger-color-100;
      }
      svg:hover,
      svg:active {
        color: $danger-color-200;
      }
    }
    button:focus {
      outline: none;
    }
  }
  form {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: $spacing-200;

    input {
      width: 100%;
      padding: $spacing-100 $spacing-200;
      color: $light-color-200;
      background-color: $dark-color-300;
      border: none;
      border-radius: $radius-100;
      box-shadow: $shadow;
    }
    input::placeholder {
      color: $light-color-100;
    }
    input:focus {
      outline: none;
    }

    .weight-and-repetition {
      width: 100%;
      display: flex;
      gap: $spacing-200;
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input:nth-child(1) {
        padding-right: $spacing-700;
        background: url("../../assets/icons/InputExercise-Weight.svg");
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: center;
        background-color: $dark-color-300;
      }
      input:nth-child(2) {
        padding-right: $spacing-700;
        padding-left: $spacing-200;
        background: url("../../assets/icons/InputExercise-Repeat.svg");
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: center;
        background-color: $dark-color-300;
      }
    }
  }
}
</style>
