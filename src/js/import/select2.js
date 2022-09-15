$(document).ready(function () {
	$('.js-simple-select2').each(function (index) {
		var placeholder = $(this).attr('data-placeholder');
		if (typeof(placeholder)!=='undefined' && placeholder.length > 0) {
			$(this).addClass('simple-select2--placeholder-selected');
		}

		$(this).select2({
			language: 'ru',
			theme: 'custom-theme',
			minimumResultsForSearch: Infinity,
			//width: '100%',
   			 dropdownAutoWidth : true,
			width: 'auto',
			dropdownParent: $(this).siblings('.simple-select2-items-wrapper')
		}).on('select2:open', function (e) {
			$(this).siblings('.simple-select2-items-wrapper').addClass('simple-select2-items-wrapper--show');
		}).on('select2:closing', function (e) {
			if ($(this).attr('data-close-anvaliable') !== '1') {
				e.preventDefault();
				var $this = $(this);
				$(this).attr('data-close-anvaliable', '1');
				$(this).siblings('.simple-select2-items-wrapper').removeClass('simple-select2-items-wrapper--show');
				setTimeout(function () {
					$this.select2('close');
				}, 350);
			}
			else {
				$(this).attr('data-close-anvaliable', '2');
			}
			//$(this).select2('close');

		}).on('select2:select', function (e) {
			$(this).removeClass('simple-select2--placeholder-selected');
		});
	});


	$('.js-simple-select2-month').each(function (index) {
		var placeholder = $(this).attr('data-placeholder');
		if (typeof(placeholder)!=='undefined' && placeholder.length > 0) {
			$(this).addClass('simple-select2--placeholder-selected');
		}

		$(this).select2({
			language: 'ru',
			theme: 'custom-theme select2-container--custom-theme--month',
			minimumResultsForSearch: Infinity,
			//width: '100%',
   			 dropdownAutoWidth : true,
			width: 'auto',
			dropdownParent: $(this).siblings('.simple-select2-items-wrapper')
		}).on('select2:open', function (e) {
			$(this).siblings('.simple-select2-items-wrapper').addClass('simple-select2-items-wrapper--show');
		}).on('select2:closing', function (e) {
			if ($(this).attr('data-close-anvaliable') !== '1') {
				e.preventDefault();
				var $this = $(this);
				$(this).attr('data-close-anvaliable', '1');
				$(this).siblings('.simple-select2-items-wrapper').removeClass('simple-select2-items-wrapper--show');
				setTimeout(function () {
					$this.select2('close');
				}, 350);
			}
			else {
				$(this).attr('data-close-anvaliable', '2');
			}
			//$(this).select2('close');

		}).on('select2:select', function (e) {
			$(this).removeClass('simple-select2--placeholder-selected');
		});
	});
});
