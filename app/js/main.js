$(function(){

  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(window).on("scroll", function (){
    var w_top = $(window).scrollTop();
    var e_top = $("#counts").offset().top;

    console.log(w_top + " " + e_top);
    
  });

});