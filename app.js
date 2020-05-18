new Vue({
  el: '#vue-app',
  data: {
    name: 'Patrick',
    job: 'Developer',
    website: 'https://github.com/patrick-nqh-bl/vue-playlist',
    websiteTag:
      '<a href="https://github.com/patrick-nqh-bl/vue-playlist">Github Repo</a>',
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name;
    },
  },
});
