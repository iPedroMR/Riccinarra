(function ($) {
  "use strict";

  /* 
   CounterUp
   ========================================================================== */
  $(".counter").counterUp({
    time: 500,
  });

  /* 
   MixitUp
   ========================================================================== */
  $("#portfolio").mixItUp();

  /* 
   Clients Sponsor 
   ========================================================================== */
  var owl = $("#clients-scroller");
  owl.owlCarousel({
    items: 5,
    itemsTablet: 3,
    margin: 90,
    stagePadding: 90,
    smartSpeed: 450,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 3],
    itemsTablet: [767, 2],
    itemsTabletSmall: [480, 2],
    itemsMobile: [479, 1],
  });

  /* 
   Touch Owl Carousel
   ========================================================================== */
  var owl = $(".touch-slider");
  owl.owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1],
  });

  $(".touch-slider")
    .find(".owl-prev")
    .html('<i class="fa fa-chevron-left"></i>');
  $(".touch-slider")
    .find(".owl-next")
    .html('<i class="fa fa-chevron-right"></i>');

  /* 
   Sticky Nav
   ========================================================================== */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      $(".header-top-area").addClass("menu-bg");
    } else {
      $(".header-top-area").removeClass("menu-bg");
    }
  });

  /* 
   VIDEO POP-UP
   ========================================================================== */
  $(".video-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(400);
    } else {
      $(".back-to-top").fadeOut(400);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  /* 
   One Page Navigation & wow js
   ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  // one page navigation
  $(".main-navigation").onePageNav({
    currentClass: "active",
  });

  $(window).on("load", function () {
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195,
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $(".fixed-top").addClass("menu-bg");
      } else {
        $(".fixed-top").removeClass("menu-bg");
      }
    });
  });
  /* Nivo Lightbox
  ========================================================*/
  $(".lightbox").nivoLightbox({
    effect: "fadeScale",
    keyboardNav: true,
  });

  /* Map Form Toggle
  ========================================================*/
  $(".map-icon").on("click", function (e) {
    $("#google-map").toggleClass("panel-show");
    e.preventDefault();
  });

  /* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40,
    responsive: true,
  });

  /* 
   Page Loader
   ========================================================================== */
  $(window).on("load", function () {
    "use strict";
    $("#loader").fadeOut();
  });
})(jQuery);

jQuery(document).ready(function ($) {
  "use strict";
  $("#customers-testimonials").owlCarousel({
    center: true,
    items: 3,
    margin: 30,
    autoHeight: true,
    autoplay: true,
    dots: true,
    nav: true,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  $("#customers-blog").owlCarousel({
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsTabletSmall: false,
    itemsMobile: false,
    autoPlay: false,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  $("#customers-pics").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: false,
    autoHeight: true,
    dots: true,
    nav: true,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

 
  
});
