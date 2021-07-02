$(document).ready(function () {
  "use strict";

  // Toggel menu
  $(".navbar-toggler").on("click", function () {
    $(".navbar-nav").toggleClass("show");
    $(".navbar").toggleClass("show");
    $("#nav-icon").toggleClass("open");
  });

  // add class to my-navbar li and view section
  $(".navbar-nav .nav-item").on("click", function (e) {
    if (!$(this).hasClass("active")) {
      var tabNum = $(this).index();
      var nthChild = tabNum + 2;
      $(this).addClass("active").siblings().removeClass("active");
      $(".navbar-nav .nav-link").removeClass("active");
      $(".navbar").toggleClass("show");
      $("#nav-icon").toggleClass("open");
      $("#main > section.active").removeClass("active");
      $("#main > section:nth-child(" + nthChild + ")").addClass("active");
    }
    e.preventDefault();
  });

  // adjust buttom protflio in header
  $("#home .pagelink").on("click", function (e) {
    e.preventDefault();
    if ((e.target.parentNode.id = "portfolio-btn")) {
      $(".my-navbar li").removeClass("active");
      $(".my-navbar .mynav-item.portfolio").addClass("active");
      $(".my-navbar .mynav-item .portfolio").addClass("active");
      $(".project").addClass("active");
    }
  });

  //triggre type Master
  var typed1 = new Typed(".typed-1", {
    strings: ["HELLO! I am"],

    loop: true,
    loopCount: Infinity,
    typeSpeed: 100,
    backSpeed: 50,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
  });

  // adjust skills progress
  $(".on-progress").on("click", function () {
    $(".skills .progress .skill-per").each(function () {
      let $this = $(this);
      let per = $this.attr("per");
      $this.css("width", per + "%");
    });
  });

  // adjust round bar
  $(".round")
    .circleProgress({ fill: { color: ["#4c84ff"] } })
    .on("circle-animation-progress", function (_event, _progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(parseInt(100 * stepValue)) + "%");
    });

  // trigger mix it
  var mix = $("#mix");
  var mixer = mixitup(mix);

  //shuffle links work menu

  $(".project .work-menu  li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// loading screen

$(window).on("load", function () {
  $(".loader").addClass("active");

  setTimeout(function () {
    $(".loader").remove();
  }, 5000);
});
