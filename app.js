new Vue({
  el: '#vue-app',
  data: {
    name: 'Patrick',
    job: 'Developer',
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name;
    },
  },
});
