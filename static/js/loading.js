
/*  LOADING
-------------------------------------------------------*/

$(function() {
	setTimeout(function(){
		$('#loading-second').css('display','none');
		$('#loading-first-text').css('display','none');
	},0);
	setTimeout(function(){
		$('#loading-first-text-move').addClass('is-move');
	},0);
	setTimeout(function(){
		$('#loading-first-text-move').removeClass('is-move');
		$('#loading-first-text-move').addClass('is-move2');
		$('#loading-first-text').css('display','block');
	},0);
	setTimeout(function(){
		$('#loading-first').css('display','none');
		$('#loading-second').css('display','block');
	},0);
  setTimeout(function(){
    $('#loading-logo').css('display','none');
  },0);
	setTimeout(function(){
		$('#loading-second').css('display','none');
		$('.anim--load').addClass('is-show');
	},0);
  setTimeout(function(){
    $('#main-content').css('display','block');
  },0);
	setTimeout(function(){
		$('.hero__catch__move').addClass('is-move');
	},0);
});
