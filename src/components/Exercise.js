  export default {
    name: 'Exercise',
    computed: {
      inlineValidationClass() {
        return this.input.length > 50
      },
      inputValidationClass() {
        return this.input.length > 50 ? 'red-border' : ''
      },
      buttonIsDisabled() {
        return this.input.length > 50 || this.input.length === 0
      }
    },

    data() {
      return {
        input: ''
      }
    }
  }