<template>
  <div>
    <section class="timeline-container">
      <h5>Add Exercise</h5>

      <tx-datepicker placeholder="Select Date" />

      <div class="input-exercise-container">
        <tx-input-exercise />
        <tx-input-exercise />
        <tx-input-exercise />
        <tx-input-exercise />
        <tx-input-exercise />
      </div>

      <tx-button width="100%">
        <tx-plus-icon />
      </tx-button>

      <div class="action">
        <router-link to="/" exact>
          <tx-button text="Cencel" width="100%" buttonStyle="secondary" />
        </router-link>
        <router-link to="">
          <tx-button text="Save" width="100%" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from "../atoms/DatePicker.vue";
import InputExercise from "../molecules/InputExercise.vue";
import Button from "../atoms/Button.vue";
import PlusIcon from "../atoms/PlusIcon.vue";

export default {
  name: "AddExercise",
  data() {
    return {};
  },
  components: {
    "tx-datepicker": DatePicker,
    "tx-input-exercise": InputExercise,
    "tx-button": Button,
    "tx-plus-icon": PlusIcon,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.timeline-container {
  width: 100%;
  margin-bottom: 40%;

  h5 {
    font-weight: 900;
    margin-bottom: $spacing-700;
    text-align: left;
  }

  .input-exercise-container {
    display: flex;
    flex-direction: column;
    gap: $spacing-100;
  }
}

.action {
  padding: $spacing-100 0px $spacing-500 0px;
  margin: 0 $spacing-400;
  display: flex;
  gap: $spacing-100;
  background-color: $dark-color-100;
  border-top: 1px solid $light-color-100;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  a {
    width: 100%;
  }
}
</style>
