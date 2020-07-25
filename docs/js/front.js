/*  SLIDER (swiper.js)
-------------------------------------------------------*/

$(function() {
  var swiper = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slide__btn__next',
      prevEl: '.slide__btn__prev',
    },
    pagination: {
      el: '.slide__pagination',
      type: 'bullets',
      clickable: true
    },
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      800: {
        slidesPerView: 1,
      }
    }
  });
});



/*  NUMBER COUNT UP (numerator.js)
-------------------------------------------------------*/

$(function() {
  $('#count1').on('inview', function(event, isInView) {
    $("#count1").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
    });
  });
});

$(function() {
  $('#count2').on('inview', function(event, isInView) {
    $("#count2").countTo({
    });
  });
});



/*  image slide
-------------------------------------------------------*/
$(function() {
  $('.businessF2__image,.businessF3__image').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-move');
    } else {
      $(this).removeClass('is-move');
    }
  });
});


/*  image slide
-------------------------------------------------------*/
$(function() {
  $('.update__box').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-move');
    } else {
      $(this).removeClass('is-move');
    }
  });
});
