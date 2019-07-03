$(document).ready(function() {
    //SCROLL MENU
    $(window).on('scroll', function(){
       if($(window).scrollTop()> 60){
           $('.menu .row').addClass('scroll-menu');
       }
       else{
           $('.menu .row').removeClass('scroll-menu');
       }
    })
});
