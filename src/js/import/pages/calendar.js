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


