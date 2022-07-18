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


//select





$(document).ready(function () {
	const selectSingle1 = document.querySelector('.select1');
	const selectSingle1_title = selectSingle1.querySelector('.select1--title');
	const selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');

	selectSingle1_title.addEventListener('click', () => {
		if ('active' === selectSingle1.getAttribute('data-state')) {
			selectSingle1.setAttribute('data-state', '');
		} else {
			selectSingle1.setAttribute('data-state', 'active');
		}
	});

	for (let i = 0; i < selectSingle1_labels.length; i++) {
		selectSingle1_labels[i].addEventListener('click', (evt) => {
			selectSingle1_title.textContent = evt.target.textContent;
			selectSingle1.setAttribute('data-state', '');
		});
	}



	const selectSingle2 = document.querySelector('.select2');
	const selectSingle2_title = selectSingle2.querySelector('.select2--title');
	const selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');

	selectSingle2_title.addEventListener('click', () => {
		if ('active' === selectSingle2.getAttribute('data-state')) {
			selectSingle2.setAttribute('data-state', '');
		} else {
			selectSingle2.setAttribute('data-state', 'active');
		}
	});

	for (let i = 0; i < selectSingle2_labels.length; i++) {
		selectSingle2_labels[i].addEventListener('click', (evt) => {
			selectSingle2_title.textContent = evt.target.textContent;
			selectSingle2.setAttribute('data-state', '');
		});
	}


	const selectSingle_offices = document.querySelector('.select-offices');
	const selectSingle_offices_title = selectSingle_offices.querySelector('.select-offices--title');
	const selectSingle_offices_labels = selectSingle_offices.querySelectorAll('.select-offices--label');

	selectSingle_offices_title.addEventListener('click', () => {
		if ('active' === selectSingle_offices.getAttribute('data-state')) {
			selectSingle_offices.setAttribute('data-state', '');
		} else {
			selectSingle_offices.setAttribute('data-state', 'active');
		}
	});

	for (let i = 0; i < selectSingle_offices_labels.length; i++) {
		selectSingle_offices_labels[i].addEventListener('click', (evt) => {
			selectSingle_offices_title.textContent = evt.target.textContent;
			selectSingle_offices.setAttribute('data-state', '');
		});
	}


});



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
	if($('#mapplic').length>0){

		var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';

		var mapJsonSrc= '/jslibs/mall.json';
		if(document.location.href.includes('.github.io')){
			mapJsonSrc= '/IP/dist/jslibs/mall.json';
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
			on: {
				reveal: (fancybox, slide) => {
					$('#mapplic').trigger('resize')
				}
			}
		});
	}
});