
/* globals $:false */
/* globals console:false */
/* globals document:false */
/*global window: false */

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
        $("nav").css('background-color', 'rgba(0, 0, 0, 0.5)');
        $("nav").find('a').css('color', 'white');
    } else {
        $("nav").css('background-color', 'transparent');
        $("nav").find('a').css('color', '#25272b');
    }
    $("#resume").find('a').css('color', '#25272b');
  });

$(document).ready(function () {
    'use strict';

    const windowWidth = $(window).innerWidth;
    const windowHeight = $(window).height();

    console.log(windowWidth, windowHeight);

    $("#home, #about").css('width', windowWidth);
    $("#home, #about").css('height', windowHeight);

    $('.carousel').carousel({
        interval: false
    });

    if ($(window).width() <= 768) {
        $(".navbar-toggler").on('click', function () {
            $(".navbar-collapse").addClass('add-bgd');
            $(".navbar-collapse").find('a').addClass('text-white');
            $("#resume").find('a').removeClass('text-white');
        });
    }

    $("ul.navbar-nav").find('a').on('click', function () {
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html,body').animate({ scrollTop: $anchor.top }, 'slow');
    });
});