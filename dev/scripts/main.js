$(document).ready(function(){
    $('a').smoothScroll({
        speed: 1000
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






