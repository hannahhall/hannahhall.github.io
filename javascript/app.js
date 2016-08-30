angular.module('app', ['ui.bootstrap'])
  .controller("ProjectsCtrl", function ($http) {
    var vm = this;
    $http.get('/javascript/projects.json').then(
      function success(res) {
        vm.projects = res.data.projects;
        vm.techs = res.data.tech;
      })
  })
