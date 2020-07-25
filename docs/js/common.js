/*  picturefill.js
-------------------------------------------------------*/
$(function () {
	document.createElement( 'picture' );
});


/*  ofi.js
-------------------------------------------------------*/

$(function () {
  objectFitImages( '.ofi' );
});


/*  トグルメニュー
-------------------------------------------------------*/
$(function(){
  $('#toggle').click(function() {
    $('.header__navi').toggleClass('is-open');
    $('#toggle').toggleClass('is-active');
  });
  $('.header__navi a').click( function () {
    $('#toggle').removeClass('is-active');
    $('.header__navi').removeClass('is-open');
  });
});

$(function(){
    $('.navi > div p').click(function(){
      $(this).next('.submenu-bg').slideToggle();
      $(this).toggleClass('is-open');
      $('.navi > div p').not($(this)).next('.submenu').slideUp();
    });
});

/* スムーススクロール
------------------------------------- */

$(function() {
		var headerHight = $('#header').height();
	$('a[href^="#"]').click(function() {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? "body" : href);
		var position = target.offset().top - headerHight;
		var speed = 500;
		$("html, body").animate({ scrollTop: position }, speed, "swing");
	return false;
	});
});

/*  スクロールアニメーション
-------------------------------------------------------*/

// inview
$(function() {
  $('.anim--scroll').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
    } else {
      //$(this).removeClass('is-show');
    }
  });
});


/*  アコーディオン
-------------------------------------------------------*/
$(function() {
    $('.aside__post__archives__mounth').hide();
    $('.aside__post__archives__year').click(function() {
        $(this).next().slideToggle();
				if($(this).hasClass('is-show')){
        $(this).removeClass('is-show');
			}else{
				$(this).addClass('is-show');
			}
    });
});
