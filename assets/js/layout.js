$(document).ready(function() {
    //BURGER
    $('.burger').click(function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('showNav');
    });

    if ($(window).width() < 992) {
      // BELOW TO 992px
      $( "nav > ul > li > a" ).click(function(e) {
        e.preventDefault();
        $(this).next($('.submenu')).toggleClass('submenu-open');
      });

    }
    else {
        // UP TO 992px
        //SCROLL MENU
        $(window).on('scroll', function(){
           if($(window).scrollTop()> 60){
               $('.menu .row').addClass('scroll-menu');
           }
           else{
               $('.menu .row').removeClass('scroll-menu');
           }
       });
    }
});
