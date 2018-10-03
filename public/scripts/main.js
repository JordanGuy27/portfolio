"use strict";

$(document).ready(function () {
    $('a').smoothScroll({
        speed: 1000
    });
});

var $hamburger = $(".hamburger");
var $nav = $(".hamburgerNav");

$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("active");
});