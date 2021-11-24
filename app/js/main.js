$(function(){

  $('.hero__slider,.clients__slider').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  
  $('.about__counter').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step:function (now){
        $(this).text(Math.ceil(now));
      }
    });
  });


})