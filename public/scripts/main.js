"use strict";

$(document).ready(function () {
    $('a').smoothScroll({
        speed: 1300,
        offset: -72
    });
});

var $hamburger = $(".hamburger");
var $nav = $(".hamburgerNav");

$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("active");
});

$nav.on("click", function () {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("active");
});