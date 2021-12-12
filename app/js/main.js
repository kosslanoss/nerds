$(function(){



  $('.filter-price__input').ionRangeSlider({
    onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },  
    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
  });


  
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