
/* global $:false */
/* global console:false */
/* global document:false */
/* global window: false */

$(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const windowWidth = $('body').innerWidth();

    if (scrollTop > 0) {
        $("nav").addClass('add-bgd');
        $("nav").find('a').css('color', 'white');
    } else {
        if (windowWidth >= 992) {
            $("nav").removeClass('add-bgd');
            $("nav").find('a').css('color', '#25272b');
        }
    }
    $("#resume").find('a').css('color', '#25272b');
  });

$(document).ready(function () {
    'use strict';

    $("#api-dev").hide();
    $("#front-end").hide();

    const windowWidth = $('body').innerWidth();
    const windowHeight = $(window).height();

    if (windowWidth < 992) {
        $("nav").addClass('add-bgd');
        $("nav").find('a').css('color', 'white');
        $("#resume").find('a').css('color', '#25272b');
    }

    const imgWidth = $(".card-img")[0].clientWidth;
    $(".card-img-overlay").each(function() {
        $(this).css('width', imgWidth);
    });

    $("#home, #about, #projects").css('width', windowWidth);
    $("#home").css('height', windowHeight);

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