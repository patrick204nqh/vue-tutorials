<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <devs></devs>
  </div>
</template>

<script>
import Patrick from "./Patrick";

export default {
  component: {
    devs: Patrick
  },
  data() {
    return {
      title: "Patrick App"
    };
  },
  methods: {
    greeting: function() {
      return "Hello, Patrick";
    }
  }
};
</script>

<style>
</style>
