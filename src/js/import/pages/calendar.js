var swiper = new Swiper(".swiper-offices-calendar", {
	slidesPerView: 1,
	watchSlidesProgress: true,
	allowTouchMove: false,
	effect: 'fade',
});

var swiper2 = new Swiper(".select-offices--title", {
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	pagination: {
		el: ".select-offices--content-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-mosk", {
	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-mosk-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-pit", {
	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-pit-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".calendar__swiper-inner1", {
	effect: 'fade',
	navigation: {
		nextEl: ".calendar-slide__next1",
		prevEl: ".calendar-slide__prev1",
	},
}); 





$(function() {
	$(".select-offices--title").click(function() {
		$(".select-offices").toggleClass("active");   
		$('.select-offices--content').toggleClass("active");
	});
	$(".swiper-pagination-bullet").click(function() {
		$(".select-offices").removeClass("active");   
		$('.select-offices--content').removeClass("active");
	});
});
$(document).click( function(e){ 
	var login = $( ".select-offices" );
	if ( !login.is(e.target) && login.has(e.target).length === 0 ) { 
		$(".select-offices, .select-offices--content").removeClass('active'); 
	}
});


$(function() {
	$(".hover-block").mouseover(function() {
		$(this).addClass('active');
	});
	$(".hover-block").mouseout(function() {
		$(this).removeClass('active');
	});
});
$(function() {
	$(".calendar-slide__item").click(function() {
		if (!$(".hover-block").hasClass('active')) {
			$(".calendar-slide__item").removeClass('active');
			$(this).addClass('active');
		}
	});
});
$(document).click( function(e){ 
	var calendar = $( ".calendar-slide__item" );
	if ( !calendar.is(e.target) && calendar.has(e.target).length === 0 ) { 
		$(".calendar-slide__item").removeClass('active'); 
	}
});


