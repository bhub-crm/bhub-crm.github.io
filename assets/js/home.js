
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
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