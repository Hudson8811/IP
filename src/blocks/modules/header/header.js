$(document).ready(function() {
	$('.header__man').click(function(event) {
		$('.login-header').toggleClass('active');
	});
	$('.page').click( function(e){ 
		$('.login-header').removeClass('active');
	});
	$('.header__btn-menu').click( function(e){ 
		$('.header__btn-menu').toggleClass('js-active-btn-menu');
		$('.menu').toggleClass('js-active-menu');
		$('body').toggleClass('js-overflow-active');

		$('.header__btn-sidebar').removeClass('js-active-btn-sidebar');
		$('.sidebar').removeClass('js-active-sidebar');
	});
	$('.header__btn-sidebar').click( function(e){ 
		$('.header__btn-sidebar').toggleClass('js-active-btn-sidebar');
		$('.sidebar').toggleClass('js-active-sidebar');
		$('body').toggleClass('js-overflow-active');

		$('.header__btn-menu').removeClass('js-active-btn-menu');
		$('.menu').removeClass('js-active-menu');
	});
});