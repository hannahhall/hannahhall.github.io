"use strict";
var navBarPosition = $('.navBar').offset().top;

function stickyNavBar() {
  var topScreen = $(window).scrollTop()
  if (navBarPosition < topScreen) {
    $('.navBar').addClass('stick');
  } else {
    $('.navBar').removeClass('stick');
  }
}

$(window).scroll(function () {
  stickyNavBar();
})
