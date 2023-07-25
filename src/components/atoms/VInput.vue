<template>
  <div>
    <!-- DatePicker Props from v-calendar
    masks : used to change date format inside of an input
    model-config : used to change date format of an output value -->
    <date-picker
      v-model="selectedDate"
      :masks="masks"
      :model-config="modelConfig"
      is-dark
      color="orange"
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div :style="{ width: getInputWidth }" class="input">
          <input
            v-if="type === 'date' ? true : false"
            class="input__field"
            :placeholder="placeholder"
            :value="inputValue"
            v-on="inputEvents"
          />
          <input v-else class="input__field" :placeholder="placeholder" />

          <div class="input__slot">
            <slot />
          </div>
        </div>
      </template>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "VInput",
  components: {
    DatePicker,
  },
  data() {
    return {
      selectedDate: "",
      masks: {
        input: "DD/MM/YYYY",
      },
      modelConfig: {
        type: "string",
        mask: "DD-MM-YYYY",
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    width: {
      type: String,
      default: "335px",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    getInputWidth() {
      return this.width;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  padding: $spacing-100 $spacing-200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $spacing-100;
  background: $dark-color-200;
  border-radius: $radius-100;

  &:focus-within {
    outline: 1px solid $accent-color-100;
  }

  &__field {
    width: 100%;
    font-family: "GeneralSans-Medium";
    background: transparent;
    color: $light-color-100;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__slot {
    color: $accent-color-100;
    font-family: "GeneralSans-Semibold";
  }
}
</style>
