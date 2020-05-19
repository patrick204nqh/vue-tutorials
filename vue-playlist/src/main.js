import Vue from "vue";
import App from "./App.vue";
import Patrick from "./Patrick.vue";

Vue.component("devs", Patrick);

new Vue({
  el: "#app",
  render: h => h(App)
});
