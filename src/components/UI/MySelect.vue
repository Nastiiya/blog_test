<template>
  <select v-model="optionValue" v-on:change="changeOption">
    <option disabled value="">Select sort</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props : {
    optionValue: {
      type: String
    },

    options : {
      type: Array,
      default: () => []
    }
  },

  methods: {
    changeOption (event) {
       this.$emit ("update:optionValue", event.target.value)
    }
  }
}
</script>

<style scoped>

</style>