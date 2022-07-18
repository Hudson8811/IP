$(function() {
	const $datepicker = $('.js-datepicker');
	let datepicker = $datepicker.datepicker({
		autoClose: false,
		classes: 'datepicker__calendar',
		position: 'bottom center',
		offset: 22,
		range: true,
		multipleDatesSeparator: '  ',

	})
});


/* var swiper2 = new Swiper(".swiper-offices-calendar", {
	pagination: {
		el: ".select-offices--content-pagination",
		clickable: true,
	},
	speed: 1000,
	effect: 'fade',
	thumbs: {
		swiper: swiper,
	},
});
var swiper = new Swiper(".select-offices--title", {
	watchSlidesProgress: true,
}); */


var swiper = new Swiper(".swiper-offices-calendar", {
	slidesPerView: 1,
	watchSlidesProgress: true,
	allowTouchMove: false,
/* 	speed: 500,
 */	effect: 'fade',
});

var swiper2 = new Swiper(".select-offices--title", {
	thumbs: {
		swiper: swiper,
	},
/* 	speed: 500,
 */	effect: 'fade',
	pagination: {
		el: ".select-offices--content-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-mosk", {
/* 	speed: 500,
 */	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-mosk-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-pit", {
/* 	speed: 500,
 */	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-pit-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".calendar__swiper-inner1", {
/* 	speed: 500,
 */	effect: 'fade',
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


/*
$(document).ready(function(){
   $("#confirmed-hover-block1").mousemove(function (pos) {
		$("#confirmed-block1").show(300);
		$("#confirmed-block1").css('left',(pos.pageX+40)+'px').css('top',(pos.pageY+40)+'px');          
	}).mouseleave(function() {
		$("#confirmed-block1").hide(300); 
	});
});
*/

/* $(document).ready(function(){
   $("#waiting-hover-block1").mousemove(function (pos) { 
		$("#waiting-block1").show(300);
		$("#waiting-block1").css('left',(pos.pageX+40)+'px').css('top',(pos.pageY+40)+'px');          
	}).mouseleave(function() {
		$("#waiting-block1").hide(300); 
	});
}); */
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
/* 	$(".calendar-slide__item").click(function() {
		$(".calendar-slide__item").removeClass('active');
		$(this).addClass('active');
	}); */
	
/* 	$(".hover-block").click(function() {
		if (!$(".calendar-slide__item").hasClass('active')) {
			$(".calendar-slide__item").removeClass('active');   
		}
	});  */
		
});
$(document).click( function(e){ 
	var calendar = $( ".calendar-slide__item" );
	if ( !calendar.is(e.target) && calendar.has(e.target).length === 0 ) { 
		$(".calendar-slide__item").removeClass('active'); 
	}
});