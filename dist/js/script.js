$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(".mynav").css({ "background-color": "white" });
      $(".nav-link").css("color", "#707071");
      $(".toggler-svg").css("fill", "#707071");
      $(".s").css("color", "#ffffff");
    } else {
      $(".mynav").css({ "background-color": "transparent" });
      $(".nav-link").css("color", "white");
      $(".toggler-svg").css("fill", "white");
    }
  });
});
