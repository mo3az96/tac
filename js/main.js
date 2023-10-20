$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Navbar *****/
  $(".menu-btn").click(function () {
    $(".overlay").fadeIn(500);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-menu,.overlay").click(function () {
    $(".overlay").fadeOut(500);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /***** Hero Slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Services Slider *****/
  var servicesSwiper = new Swiper(".services-slider .swiper-container", {
    // loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Products Slideres *****/
  var featuredSwiper = new Swiper(".featured-slider .swiper-container", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".featured-slider .swiper-pagination",
      clickable: true,
    },
  });

  var bestsellerSwiper = new Swiper(".bestseller-slider .swiper-container", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".bestseller-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".footer-nav .footer-title").click(function () {
      $(".footer-nav .footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-nav .footer-title").not(this).siblings().slideUp(500);
    });
  }
});
