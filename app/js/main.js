$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

$('.hero__slider').slick({
    dots: true,
    arrows: false,
    fade: true
  });

$('.clients__items').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  


  var counted = 0;
$(window).scroll(function() {

  var oTop = $('.about__items').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
  $('.about__counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ 
    countNum: $this.text()
  }).animate({
    countNum: countTo
  },

  {
    duration: 3000,
    easing:'swing',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  

});

counted = 1;
  }

});



  let popup = document.querySelector(".popup");
  let popupForm = document.querySelector(".popup__form");
  let popupBtn = document.querySelector(".map__btn");
  let popupClose = document.querySelector(".popup__btn-close");

  popupBtn.addEventListener("click", (e) => {
    e.preventDefault;
     showPopup();
  });

  popupClose.addEventListener("click", (e) => {
     e.preventDefault;
     removePopup();
   });

  popupForm.addEventListener("submit", () => {
     removePopup();
  });

  popup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("popup")) {
      removePopup();
    } else return;
  });

  function showPopup() {
    popup.classList.add("active");
    bodyScroll();
  }

  function removePopup() {
    popup.classList.remove("active");
    bodyScroll();
   }

  function bodyScroll() {
    document.body.classList.toggle("no-scroll");
  }



 var mixer = mixitup('.shop-content__products', {
    selectors: {
      target: '.product'
    },
    animation: {
      duration: 300
    }
  });

  

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




})