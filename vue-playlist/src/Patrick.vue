<template>
  <div>
    <h1>List of developers</h1>
    <ul>
      <li v-for="dev in devs">{{ dev }}</li>
    </ul>
  </div>
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

<style scoped>
h1 {
  color: green;
}
</style>
