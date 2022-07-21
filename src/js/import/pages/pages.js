//RADIO
$(document).ready(function () {
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});
});
const autoreply = document.querySelector('.autoreply');
const massage_icon = document.querySelector('.massage-icon');
if (autoreply) {
	massage_icon.classList.add('active')
}

const signature = document.querySelector('.signature');
const signature_icon = document.querySelector('.signature-icon');
if (signature) {
	signature_icon.classList.add('active')
}

const offices_calendar = document.querySelector('.offices-calendar');
const calendar_icon = document.querySelector('.calendar-icon');
if (offices_calendar) {
	calendar_icon.classList.add('active')
}

const people = document.querySelector('.people');
const call_icon = document.querySelector('.call-icon');
if (people) {
	call_icon.classList.add('active')
}


//select
$(document).ready(function () {
	const selectSingle1 = document.querySelector('.select1');
	const selectSingle1_title = selectSingle1.querySelector('.select1--title');
	const selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');

	selectSingle1_title.addEventListener('click', () => {
		selectSingle1.classList.toggle('active')
	});

	for (let i = 0; i < selectSingle1_labels.length; i++) {
		selectSingle1_labels[i].addEventListener('click', (evt) => {
			selectSingle1_title.textContent = evt.target.textContent;
			selectSingle1.classList.remove('active')
		});
	}
	
	const selectSingle2 = document.querySelector('.select2');
	const selectSingle2_title = selectSingle2.querySelector('.select2--title');
	const selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');
	
	selectSingle2_title.addEventListener('click', () => {
		selectSingle2.classList.toggle('active')
	});

	for (let i = 0; i < selectSingle2_labels.length; i++) {
		selectSingle2_labels[i].addEventListener('click', (evt) => {
			selectSingle2_title.textContent = evt.target.textContent;
			selectSingle2.classList.remove('active')
		});
	}
});
$(document).click( function(e){ 
	const selectSingle2 = document.querySelector('.select2');
	const selectSingle2_title = $( ".select2--title" );
	if ( !selectSingle2_title.is(e.target) && selectSingle2_title.has(e.target).length === 0 ) { 
		selectSingle2.classList.remove('active')
	}
});
$(document).click( function(e){ 
	const selectSingle1 = document.querySelector('.select1');
	const selectSingle1_title = $( ".select1--title" );
	if ( !selectSingle1_title.is(e.target) && selectSingle1_title.has(e.target).length === 0 ) { 
		selectSingle1.classList.remove('active')
	}
});

$(document).ready(function(){
	$('.select1--label-all').click(function(){
		$('.select1--label-left').removeClass('active');
		$('.select1--label-right').removeClass('active');
	});
	$('.select1--label-right').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.select1--label-left').removeClass('active');
	});
	$('.select1--label-left').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.select1--label-right').removeClass('active');
	});
});


const autoreply__item_select = document.querySelector('.autoreply__item--inner');
const autoreply__item_select_title = autoreply__item_select.querySelector('.autoreply__item--row');
const autoreply__item_select_labels = autoreply__item_select.querySelectorAll('.autoreply__item--label');

autoreply__item_select_title.addEventListener('click', () => {
	autoreply__item_select.classList.toggle('active')
});

for (let i = 0; i < autoreply__item_select_labels.length; i++) {
	autoreply__item_select_labels[i].addEventListener('click', (evt) => {
		autoreply__item_select_title.textContent = evt.target.textContent;
		autoreply__item_select.classList.remove('active')
	});
}



//MAP

/* Landing page scripts */
/*$(document).ready(function() {
	$('.usage').click(function(e) {
		e.preventDefault();
		$('.editor-window').slideToggle(200);
	});

	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var map = $('.mapplic-map'),
		x = (e.pageX - map.offset().left) / map.width(),
			y = (e.pageY - map.offset().top) / map.height();
			$('.mapplic-coordinates-x').text(parseFloat(x).toFixed(4));
			$('.mapplic-coordinates-y').text(parseFloat(y).toFixed(4));
		});
		
		$('.editor-window .window-mockup').click(function() {
			$('.editor-window').slideUp(200);
		});
	});*/

	jQuery(function () {
		var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
		
	var mapJsonSrc= '/jslibs/mall.json';
	if(document.location.href.includes('.github.io')){
		mapJsonSrc= '/IP/dist/jslibs/mall-github.json';
	}
	

	var map = $('#mapplic').mapplic({
		source: mapJsonSrc,
		customcss: css,
		sidebar: true,
		sidebartoggle: true,
		alphabetic: true,
		height: 560,
		developer: true,
		searchdescription: true,
		searcheverywhere: true,
		animations: true,
		minimap: false,
		marker: 'hidden',
		fillcolor: false,
		fullscreen: false,
		developer: false,
		thumbholder: true,
		maxscale: 3
	});
	
	Fancybox.bind("[data-fancy-map]", {
		dragToClose:false,
		on: {
			reveal: (fancybox, slide) => {
				$('#mapplic').trigger('resize')
			}
		}
	});
});
$(function() {
	$(".autoreply__item-calendar-row input").click(function() {
		$(".autoreply__item-calendar").addClass("active");   
	});
});
const picker = new easepick.create({
	element: "#datepicker",
	css: [
		"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/main.css"
	],
	lang: "ru-RU",
	calendars: 2,
	autoApply: true,
	zIndex: 10,
	plugins: ['RangePlugin'],
	RangePlugin: {
		tooltip: true,
	},
	setup(picker) {
		picker.on('hide', (e) => {
			const autoreply__item_calendar = document.querySelector('.autoreply__item-calendar');
			autoreply__item_calendar.classList.remove('active')
		});
	},
})