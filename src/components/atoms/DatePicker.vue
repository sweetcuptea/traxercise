<template>
  <div>
    <tx-datepicker
      mode="date"
      color="orange"
      is-dark
      v-model="time"
      :masks="masks"
      :model-config="modelConfig"
      title-position="left"
      :attributes="attributes"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <input
          class="input-date"
          placeholder="select date"
          :value="inputValue"
          @click="togglePopover"
        />
      </template>
    </tx-datepicker>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "DatePicker",
  components: {
    "tx-datepicker": DatePicker,
  },
  data() {
    return {
      time: "",
      masks: {
        input: "DD/MM/YYYY",
      },
      modelConfig: {
        type: "string",
        mask: "DD MM YYYY",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.input-date {
  width: 100%;
  padding: $spacing-100 $spacing-200;
  margin-bottom: $spacing-600;
  font-size: $paragraph-regular;
  color: $light-color-200;
  background: url("../../assets/icons/DatePicker-Calendar.svg");
  background-repeat: no-repeat;
  background-position-x: 97.5%;
  background-position-y: center;
  background-color: $dark-color-300;
  border: none;
  border-radius: $radius-100;
  box-shadow: $shadow;
}
.icon-tabler-calendar-event {
  color: red;
}
.input-date::placeholder {
  color: $light-color-100;
}
.input-date:focus {
  outline: none;
}
</style>
