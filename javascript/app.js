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
    let scroll = is_touch_device() ? 255 : 674

    $(window).scroll(function () {

        console.log($(window).scrollTop());
        
        if ($(window).scrollTop() > scroll) {
            $('.navbar').addClass('fixed is-primary is-bold');
        }

        if ($(window).scrollTop() < scroll) {
            $('.navbar').removeClass('fixed is-primary is-bold');
        }
    });
  });
