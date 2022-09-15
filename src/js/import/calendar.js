function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function () {
	$(function () {
		$(".select-offices--title").click(function () {
			$(".select-offices").toggleClass("active");
			$('.select-offices--content').toggleClass("active");
		});
		$(".swiper-pagination-bullet").click(function () {
			$(".select-offices").removeClass("active");
			$('.select-offices--content').removeClass("active");
		});
	});
	$(document).click(function (e) {
		var login = $(".select-offices");
		if (!login.is(e.target) && login.has(e.target).length === 0) {
			$(".select-offices, .select-offices--content").removeClass('active');
		}
	});


	$(function () {
		$(".hover-block").mouseover(function () {
			$(this).addClass('active');
		});
		$(".hover-block").mouseout(function () {
			$(this).removeClass('active');
		});
	});
	$(function () {
		$(".calendar-slide__item").click(function () {
			if (!$(".hover-block").hasClass('active')) {
				$(".calendar-slide__item").removeClass('active');
				$(this).addClass('active');
			}
		});
	});
	$(document).click(function (e) {
		var calendar = $(".calendar-slide__item");
		if (!calendar.is(e.target) && calendar.has(e.target).length === 0) {
			$(".calendar-slide__item").removeClass('active');
		}
	});
	$(function () {
		$(".autoreply__item-calendar-row input").click(function () {
			$(".autoreply__item-calendar").addClass("active");
		});
	});

	if ($('#datepicker').length > 0) {
		const picker = new easepick.create({
			element: "#datepicker",
			css: [
				"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/calendar-styles.css"
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
				picker.on('select', function (e) {
					$('#datepicker').trigger('select');
				});
				picker.on('clear', function (e) {
					$('#datepicker').trigger('clear');
				});
			},
		});
	}

	if ($('#datepicker-page-calendar').length > 0) {
		var calPageDatePickerInp = $('#datepicker-page-calendar'),
			dpWrap = calPageDatePickerInp.closest('.js-datepicker-calendar-wrap'),
			dpMonthName = dpWrap.find('.js-datepicker-calendar-month'),
			dpControls = dpWrap.find('.js-datepicker-calendar-controls'),
			isDpOpen=false;


		dpEasepickSettings={};
		dpEasepickSettings.plugins=['LockPlugin'];
		dpEasepickSettings.LockPlugin={
			minDate: new Date(),
		};

		if($('#mycal').hasClass('mycal--admin')){
			dpEasepickSettings.plugins=[];
			dpEasepickSettings.LockPlugin={};
		}

		const calPageDatePicker = new easepick.create({
			element: "#datepicker-page-calendar",
			css: [
				"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/calendar-styles.css"
			],
			lang: "ru-RU",
			calendars: 2,
			autoApply: true,
			zIndex: 10,
			plugins: dpEasepickSettings.plugins,
			date: new Date(),

			/*RangePlugin: {
				tooltip: true,
			},*/

			LockPlugin: dpEasepickSettings.LockPlugin,

			setup(currentDP) {
				currentDP.on('hide', (e) => {
					console.log('hide');

					dpWrap.removeClass('datepicker-page-calendar__wrap--active');

				});


				currentDP.on('select', function (e) {
					console.log('select');
					$('#datepicker-page-calendar').trigger('select');
					var selectedMonthName = capitalizeFirstLetter(currentDP.getDate().format('MMMM', "ru-RU"));
					dpMonthName.html(selectedMonthName);
					isDpOpen=false;
				});

				currentDP.on('render', function (e) {
					console.log('render');
					var selectedMonthName = capitalizeFirstLetter(currentDP.getDate().format('MMMM', "ru-RU"));
					dpMonthName.html(selectedMonthName);
				});

				currentDP.on('clear', function (e) {
					$('#datepicker-page-calendar').trigger('clear');
				});
			},
		});

		dpControls.on('click', function () {
			if (isDpOpen) {
				isDpOpen=false;
			}
			else {
				dpWrap.addClass('datepicker-page-calendar__wrap--active');

				calPageDatePicker.show();
				var coordinates = calPageDatePicker.adjustPosition(dpMonthName[0]);
				coordinates.top-=17;
				console.log(coordinates);
				console.log(calPageDatePicker.ui.container.style.top);

				calPageDatePicker.ui.container.style.top = `${coordinates.top}px `;
				calPageDatePicker.ui.container.style.left = `${coordinates.left}px`;

				isDpOpen=true;
			}
		});
		/*calPageDatePicker.hide();
		calPageDatePicker.getDate();*/
	}
});

