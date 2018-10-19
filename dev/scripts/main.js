$(document).ready(function(){
    $('a').smoothScroll({
        speed: 1300,
        offset: -70,
        callbackBefore: function (toggle, anchor) {
        },
        callbackAfter: function (toggle, anchor) {
            $(toggle).addClass('activeNav');
        }
    });
}) 

let $hamburger = $(".hamburger");
let $nav = $(".hamburgerNav");

$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("active");
});

$nav.on("click", function() {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("active");
})






