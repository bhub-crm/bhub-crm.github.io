
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,
        smartSpeed: 600,
        autoplayTimeout: 7000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
    })
});
