$(document).ready(function () {
    $('.drop-1').click(function () {
        $('#d1').toggle(1000);
        $('.mobile-drop-btn > i').toggleClass('fa-angle-right fa-angle-down');
    });
    $('.drop-2').click(function () {
        $('#d2').toggle(1000);
        $('.mobile-drop-btn > i').toggleClass('fa-angle-right fa-angle-down');
    });
    $('.drop-3').click(function () {
        $('#d3').toggle(1000);
        $('.mobile-drop-btn > i').toggleClass('fa-angle-right fa-angle-down');
    });
    $('.drop-4').click(function () {
        $('#d4').toggle(1000);
        $('.mobile-drop-btn > i').toggleClass('fa-angle-right fa-angle-down');
    });
    $('.drop-5').click(function () {
        $('#d5').toggle(1000);
        $('.mobile-drop-btn > i').toggleClass('fa-angle-right fa-angle-down');
    });
    $('.burderx').click(function () {
        $('.mobile-nav-menu').slideToggle(1000);
        $('.burderx > i').toggleClass('fa-bars fa-times');
    });
});

$('.custom-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.products-owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dot: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});