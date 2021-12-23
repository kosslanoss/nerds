$(function(){

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