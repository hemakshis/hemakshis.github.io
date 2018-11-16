
/* global $:false */
/* global console:false */
/* global document:false */
/* global window: false */

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
        $("nav").css('background-color', 'rgba(0, 0, 0, 0.5)');
        if ($(window).innerWidth < 992) {
            $("nav").find('a').css('color', 'black');
        } else {
            $("nav").find('a').css('color', 'white');
        }
    } else {
        $("nav").css('background-color', 'transparent');
        $("nav").find('a').css('color', '#25272b');
    }
    $("#resume").find('a').css('color', '#25272b');
  });

$(document).ready(function () {
    'use strict';

    $("#api-dev").hide();
    $("#front-end").hide();

    const windowWidth = $(window).innerWidth;
    const windowHeight = $(window).height();

    const imgWidth = $(".card-img")[0].clientWidth;
    $(".card-img-overlay").each(function() {
        $(this).css('width', imgWidth);
    });

    $("#home, #projects").css('width', windowWidth);
    $("#home, #projects").css('height', windowHeight);

    $("ul.navbar-nav").find('a').on('click', function () {
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html,body').animate({ scrollTop: $anchor.top }, 'slow');
    });

    $("#a-full-stack").on('click', function() {
        $("#full-stack").show();
        $("#api-dev").hide();
        $("#front-end").hide();

        $("#li-full-stack").addClass("active");
        $("#li-api-dev").removeClass("active");
        $("#li-front-end").removeClass("active");
    });

    $("#a-api-dev").on('click', function() {
        $("#full-stack").hide();
        $("#api-dev").show();
        $("#front-end").hide();

        $("#li-full-stack").removeClass("active");
        $("#li-api-dev").addClass("active");
        $("#li-front-end").removeClass("active");
    });

    $("#a-front-end").on('click', function() {
        $("#full-stack").hide();
        $("#api-dev").hide();
        $("#front-end").show();

        $("#li-full-stack").removeClass("active");
        $("#li-api-dev").removeClass("active");
        $("#li-front-end").addClass("active");
    });
});