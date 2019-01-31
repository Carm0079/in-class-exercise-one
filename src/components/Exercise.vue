<template>
  <div class="container">
    <div class="input-wrapper">
      <input v-bind:class="inputValidationClass" v-model="input" type="text">
      <div v-if="inlineValidationClass" class="inline-validation">You Exeeded 50 Characters!</div>
    </div>
    <div class="button-wrapper">
      <button v-bind:disabled="buttonIsDisabled">Submit</button>
    </div>
  </div>
</template>

<script src="./Exercise.js"></script>
<style src="./Exercise.css" scoped></style>