angular.module('app', [])
  .controller("ProjectsCtrl", function ($http, $sce) {
    var vm = this;
    $http.get('/javascript/projects.json').then(
      function success(res) {
        vm.projects = res.data.projects;
        vm.techs = res.data.tech;
      });

    vm.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

    vm.year = new Date().getFullYear();

    function is_touch_device() {
      return 'ontouchstart' in window;
    }
    let scroll = is_touch_device() ? 261 : 603;

    $(window).scroll(function () {


      if ($(window).scrollTop() > scroll) {
        $('html').addClass('has-navbar-fixed-top');
        $('nav').addClass('is-fixed-top is-primary is-bold');
      }

      if ($(window).scrollTop() < scroll) {
        $('html').removeClass('has-navbar-fixed-top');
        $('nav').removeClass('is-fixed-top is-primary is-bold');
      }
    });
  });
