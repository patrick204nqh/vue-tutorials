<template>
  <ul>
    <li v-for="dev in devs">{{ dev }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      devs: ["Robert", "Kevin"]
    };
  }
};
</script>

<style>
</style>
