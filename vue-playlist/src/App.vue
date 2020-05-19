<template>
  <div>
    <h1>{{ title }}</h1>
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
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
