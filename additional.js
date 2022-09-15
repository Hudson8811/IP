$(document).ready(function () {
	var inProgressLoadingPosts = false;
	$(window).scroll(function () {
		/* Кнопка вверх */
		if (typeof (postsLoadmoreParameters) !== 'undefined' && !inProgressLoadingPosts && window.scrollY + window.innerHeight + 2500 >= $('#posts-loadmore').offset().top) {
			inProgressLoadingPosts = true;

			if (++postsLoadmoreParameters.page <= postsLoadmoreParameters.max_pages) {
				var postsWrap = $('#posts-wrap'),
					data = {
						'action': 'loadmore_posts',
						'paged': postsLoadmoreParameters.page
					};


				$.ajax({ // you can also use $.post here
					url: postsLoadmoreParameters.ajaxurl, // AJAX handler
					data: data,
					type: 'POST',
					beforeSend: function (xhr) {

					},
					success: function (data) {

						if (data) {
							postsWrap.append(data);

							/*
							setTimeout(function () {
								AOS.init({
									disable: false,
									debounceDelay: 50,
									throttleDelay: 99,
									offset: 0,
									delay: 0,
									duration: 1000,
									easing: 'ease',
									once: true,
									mirror: false,
									anchorPlacement: 'top-bottom',
								});
							}, 50);
							setTimeout(function () { AOS.refresh(); }, 500);
							setTimeout(function () { AOS.refresh(); }, 1500);
							dataFancyInit();
							*/
							inProgressLoadingPosts = false;
						} else {
							$('#posts-loadmore').remove(); // if no data, remove the button as well
						}

					},
					error: function (request, status, error) {
						console.log(request);
						console.log(status);
						console.log(error);
						inProgressLoadingPosts = false;
					}
				});
			}
			else {
				$('#posts-loadmore').remove();
				inProgressLoadingPosts = true;
			}
		}
	});


	$(function () {//подсветка документов

		var mark = function () {

			// Read the keyword
			var keyword = $(".js-search-keyword").val();

			// Determine selected options
			var options = {};

			// Remove previous marked elements and mark
			// the new keyword inside the context
			$(".js-search-keyword-area").unmark({
				done: function () {
					$(".js-search-keyword-area").mark(keyword, options);
				}
			});
		};

		$(".js-search-keyword").on("input", mark);
	});

});
/*
var searchTest = {
	'Аиша Булгакова': 1,
	'Аиша Малышева': 2,
	'Александр Акимов': 3,
	'Александр Алехин': 4,
	'Александр Блинов': 5,
	'Александр Иванов': 6,
	'Александр Потапов': 7,
	'Александр Семенов': 8,
	'Александр Соколов': 9,
	'Александр Швецов': 10,
	'Александра Виноградова': 11,
	'Алексей Королев': 12,
	'Алексей Орлов': 13,
	'Алиса Новикова': 14,
	'Алиса Овчинникова': 15,
	'Алия Маслова': 16,
	'Алёна Андреева': 17,
	'Алёна Верещагина': 18,
	'Алёна Попова': 19,
	'Амина Завьялова': 20,
	'Амина Наумова': 21,
	'Анастасия Попова': 22,
	'Анастасия Чижова': 23,
	'Ангелина Ермакова': 24,
	'Ангелина Сорокина': 25,
	'Андрей Попов': 26,
	'Анна Зайцева': 27,
	'Анна Никифорова': 28,
	'Анна Шестакова': 29,
	'Арина Леонтьева': 30,
	'Арина Миронова': 31,
	'Арина Румянцева': 32,
	'Арсений Королев': 33,
	'Арсений Рябов': 34,
	'Артемий Горбунов': 35,
	'Артемий Исаев': 36,
	'Артемий Овчинников': 37,
	'Артём Маслов': 38,
	'Артём Семенов': 39,
	'Артём Смирнов': 40,
	'Артём Сычев': 41,
	'Валерия Кузина': 42,
	'Валерия Сорокина': 43,
	'Варвара Рябова': 44,
	'Варвара Соколова': 45,
	'Варвара Фокина': 46,
	'Василий Гришин': 47,
	'Василиса Клюева': 48,
	'Василиса Чернова': 49,
	'Василиса Щеглова': 50,
	'Вера Балашова': 51,
	'Вера Калугина': 52,
	'Вероника Мельникова': 53,
	'Виктория Ковалева': 54,
	'Виктория Моргунова': 55,
	'Виктория Морозова': 56,
	'Виктория Пахомова': 57,
	'Владимир Герасимов': 58,
	'Владимир Новиков': 59,
	'Владислав Овчинников': 60,
	'Владислав Шубин': 61,
	'Георгий Демидов': 62,
	'Герман Борисов': 63,
	'Григорий Бирюков': 64,
	'Даниил Захаров': 65,
	'Даниил Федоров': 66,
	'Даниэль Субботин': 67,
	'Дарья Зорина': 68,
	'Дарья Короткова': 69,
	'Дарья Крылова': 70,
	'Дарья Лаврова': 71,
	'Денис Фадеев': 72,
	'Диана Афанасьева': 73,
	'Диана Плотникова': 74,
	'Дмитрий Киселев': 75,
	'Дмитрий Кузнецов': 76,
	'Дмитрий Сахаров': 77,
	'Дмитрий Фадеев': 78,
	'Ева Бородина': 79,
	'Ева Ильина': 80,
	'Ева Лебедева': 81,
	'Ева Мальцева': 82,
	'Евгения Матвеева': 83,
	'Егор Блинов': 84,
	'Егор Козлов': 85,
	'Елизавета Гордеева': 86,
	'Елизавета Емельянова': 87,
	'Елизавета Кононова': 88,
	'Елизавета Кузнецова': 89,
	'Елизавета Панина': 90,
	'Елизавета Пономарева': 91,
	'Захар Бабушкин': 92,
	'Зоя Минина': 93,
	'Иван Гаврилов': 94,
	'Иван Кузнецов': 95,
	'Иван Федоров': 96,
	'Илья Грачев': 97,
	'Илья Журавлев': 98,
	'Камила Аксенова': 99,
	'Кира Быкова': 100,
	'Кира Климова': 101,
	'Кирилл Попов': 102,
	'Кирилл Хомяков': 103,
	'Кристина Терентьева': 104,
	'Кристина Яковлева': 105,
	'Ксения Васильева': 106,
	'Ксения Соболева': 107,
	'Лев Агеев': 108,
	'Лев Аксенов': 109,
	'Лев Бобров': 110,
	'Лидия Комарова': 111,
	'Майя Крылова': 112,
	'Макар Лукьянов': 113,
	'Макар Овчинников': 114,
	'Максим Афанасьев': 115,
	'Максим Калинин': 116,
	'Максим Козлов': 117,
	'Максим Крылов': 118,
	'Максим Лаврентьев': 119,
	'Максим Мельников': 120,
	'Максим Михайлов': 121,
	'Максим Парфенов': 122,
	'Максим Сорокин': 123,
	'Маргарита Софронова': 124,
	'Марианна Никитина': 125,
	'Марина Жданова': 126,
	'Марина Куликова': 127,
	'Мария Болдырева': 128,
	'Мария Иванова': 129,
	'Мария Маслова': 130,
	'Мария Сорокина': 131,
	'Мария Чернышева': 132,
	'Марк Климов': 133,
	'Матвей Беляев': 134,
	'Матвей Назаров': 135,
	'Матвей Павлов': 136,
	'Милана Давыдова': 137,
	'Милана Хромова': 138,
	'Мирон Тихонов': 139,
	'Мирослав Поляков': 140,
	'Мирослава Елисеева': 141,
	'Мирослава Петухова': 142,
	'Мирослава Плотникова': 143,
	'Михаил Абрамов': 144,
	'Михаил Зотов': 145,
	'Михаил Иванов': 146,
	'Михаил Кондратьев': 147,
	'Михаил Платонов': 148,
	'Михаил Швецов': 149,
	'Ника Васильева': 150,
	'Ника Краснова': 151,
	'Ника Федорова': 152,
	'Никита Антонов': 153,
	'Никита Кожевников': 154,
	'Никита Козловский': 155,
	'Никита Русаков': 156,
	'Никита Токарев': 157,
	'Ольга Михайлова': 158,
	'Павел Давыдов': 159,
	'Павел Ларин': 160,
	'Павел Яковлев': 161,
	'Платон Виноградов': 162,
	'Платон Козлов': 163,
	'Платон Розанов': 164,
	'Полина Артамонова': 165,
	'Полина Митрофанова': 166,
	'Полина Семенова': 167,
	'Полина Титова': 168,
	'Полина Юдина': 169,
	'Роберт Леонов': 170,
	'Роман Прохоров': 171,
	'Роман Филиппов': 172,
	'Савва Макаров': 173,
	'Сафия Антонова': 174,
	'Светлана Назарова': 175,
	'Семён Горбачев': 176,
	'Сергей Левин': 177,
	'София Иванова': 178,
	'София Семенова': 179,
	'Софья Козлова': 180,
	'Софья Коровина': 181,
	'Софья Осипова': 182,
	'Софья Сазонова': 183,
	'Станислав Мартынов': 184,
	'Степан Ильин': 185,
	'Степан Смирнов': 186,
	'Таисия Белова': 187,
	'Татьяна Иванова': 188,
	'Тимофей Голованов': 189,
	'Тимофей Михайлов': 190,
	'Тимофей Муравьев': 191,
	'Тимофей Орлов': 192,
	'Тимур Краснов': 193,
	'Ульяна Горбунова': 194,
	'Элина Савельева': 195,
	'Юлия Завьялова': 196,
	'Юрий Тимофеев': 197,
	'Ярослав Ефремов': 198,
	'Ярослав Масленников': 199
};

function searchEmulator(request) {
	var result = {};

	for (key in searchTest) {
		if (key.includes(request)) {
			result[key] = searchTest[key];
		}
	}

	return result;
}*/

var searchResults={};

$.fn.searchDropdown = function () {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!this.length > 0) {
		return this;
	} // настройки по умолчанию (объектный литерал настроек),
	// расширяемые с помощью параметров, которые были переданы


	var settings = $.extend({
		onSelect: function () { },
		onUnSelect: function () { }
	}, options);

	var $this = $(this),
		selected = false,
		textInp = $this.find('.search-dropdown-input'),
		idInp = $this.find('.search-dropdown-db-id'),
		dd = $this.find('.search-dropdown-dd'),
		//ddInner = $this.find('.search-dropdown-dd__inner'),
		searchSimplebar = new SimpleBar(dd[0], {
			autoHide: false
		}); //this.parent().append('');

	textInp.on('keyup input', function () {
		var request = textInp.val();
		dd.removeClass('search-dropdown-dd--active');

		if (selected && request !== textInp.attr('data-selected')) {
			textInp.attr('data-selected', '');
			idInp.val('');
			selected = false;

			settings.onUnSelect();
		}

		if (request.length > 1) {
			var searchResult = searchEmulator(request);
			var resultStr = '';

			if (!$.isEmptyObject(searchResult)) {
				for (key in searchResult) {
					resultStr += '<div class="search-dropdown-dd__item" data-id="' + searchResult[key] + '">' + key + '</div>';
				}

				resultStr = '<div class="search-dropdown-dd__inner">' + resultStr + '</div>';
				$(searchSimplebar.getContentElement()).html(resultStr);
				var ddInner = $this.find('.search-dropdown-dd__inner');
				var markOptions = [];
				markOptions['separateWordSearch'] = false;
				ddInner.unmark({
					done: function done() {
						ddInner.mark(request, markOptions);
					}
				});
				searchSimplebar.recalculate();
				dd.addClass('search-dropdown-dd--active');
			}
		}
	});
	dd.on('click', '.search-dropdown-dd__item', function () {
		console.log('click');
		textInp.val($(this).text());
		textInp.attr('data-selected', $(this).text());
		idInp.val($(this).attr('data-id'));
		dd.removeClass('search-dropdown-dd--active');
		selected = true;
		settings.onSelect();
	});
	textInp.on('blur', function () {
		setTimeout(function () {
			dd.removeClass('search-dropdown-dd--active');
		}, 300);
	});
	return this;
};

$(document).ready(function () {
	function autoreplyOnSelect() {
		$('.js-autoreply-generator-create').removeAttr('disabled');
		$('.js-autoreply-generator-copy').attr('disabled', true);
		$('.autoreply-generated-textarea').val('');
	}
	function autoreplyOnUnSelect() {
		$('.js-autoreply-generator-create').attr('disabled', true);
		$('.js-autoreply-generator-copy').attr('disabled', true);
		$('.autoreply-generated-textarea').val('');
	}

	$('.js-search-dropdown').searchDropdown({
		onSelect: function () {
			if ($('.js-autoreply-dates').val().length > 3) {
				autoreplyOnSelect();
			}
		},
		onUnSelect: function () {
			autoreplyOnUnSelect();
		}
	});

	$('.js-autoreply-dates').on('select clear', function (e) {
		var $this = $(this);
		if ($this.val().length > 3) {
			if ($('.js-autoreply-zam-id').val().length > 0) {
				autoreplyOnSelect();
			}
		}
		else {
			autoreplyOnUnSelect();
		}
	});
	/*
		$('.js-autoreply-dates').on('select', function () {

			console.log($('.js-autoreply-dates').val());
			if ($('.js-autoreply-dates').val().length > 3) {
				console.log(2);
				if ($('.js-autoreply-zam-id').val().length > 0) {
					console.log(3);
					autoreplyOnSelect();
				}
			}
			else {
				autoreplyOnUnSelect();
			}
		});*/

	$('.js-autoreply-generator-create').on('click', function () {
		var langSlug = $('input[name="autoreplySelectLang"]:checked').val();
		var html = $('.js-lang-template[data-slug="' + langSlug + '"]').html();

		var debug_replacement =
			[['#name#', 'Жду'],
			['#surname#', 'Базу'],
			['#phone#', '+79999999999'],
			['#email#', 'waiting@for.database']];

		debug_replacement.forEach(function (element) {
			html = html.replaceAll(element[0], element[1]);
		});


		$('.autoreply-generated-textarea').val(html);
		$('.js-autoreply-generator-create').attr('disabled', true);
		$('.js-autoreply-generator-copy').removeAttr('disabled');

	});

	//копирование выполняет библиотека, целеуказние через аттрибуты
	var clipboard = new ClipboardJS('.js-clipboard', {
		text: function (trigger) {
			return $($(trigger).data('clipboard-target')).html();
		}
	});

	$('.js-autoreply-generator-reset').on('click', function () {

		if ($('.js-autoreply-zam-id').val().length > 0 && $('.js-autoreply-dates').val().length > 3) {
			$('.js-autoreply-generator-create').removeAttr('disabled');
		}

		$('.js-autoreply-generator-copy').attr('disabled', true);
		$('.autoreply-generated-textarea').val('');
	});


	$('.js-change-signature').on('click', function () {
		var html = $(this).find('.js-template-variant').html();
		var debug_replacement =
			[['#name#', 'Имя'],
			['#surname#', 'Фамилия'],
			['#phone#', '+79999999999'],
			['#email#', 'waiting@for.database']];

		debug_replacement.forEach(function (element) {
			html = html.replaceAll(element[0], element[1]);
		});

		$('#signature-generated-text').html(html);
	});
	$('.js-change-signature').first(0).trigger('click');

	if (new Url().query.style === 'list') {
		$('.js-style-of-view[data-style="list"]').addClass('employees-style--active');
	}
	else {
		$('.js-style-of-view[data-style="cards"]').addClass('employees-style--active');
	}

	$('.js-style-of-view').on('click', function (e) {
		e.preventDefault();
		var style = $(this).data('style');

		var u = new Url();

		if (style === 'cards') {
			delete (u.query.style);
		}
		else {
			u.query.style = style;
		}
		history.pushState(null, null, u.toString());
		document.location.reload()
	});
});

var inProgressLoadMoreEmployees = false;
$(document).ready(function () {
	$('.js-select-department').on('change', function () {
		var val = $('.js-select-department:checked').val();

		var u = new Url();
		if (val === 'all') {
			delete (u.query.department);
		}
		else {
			u.query.department = val;
		}
		history.pushState(null, null, u.toString());
		employeesLoadmoreParameters.page = 1;
		inProgressLoadMoreEmployees = false;
		setTimeout(function () {
			ajaxLoadmoreEmployees(true, false);
		}, 100);
	});

	$('.js-select-office').on('change', function () {
		var val = $('.js-select-office:checked').val();

		var u = new Url();
		if (val === 'all') {
			delete (u.query.office);
		}
		else {
			u.query.office = val;
		}
		history.pushState(null, null, u.toString());
		employeesLoadmoreParameters.page = 1;
		inProgressLoadMoreEmployees = false;
		setTimeout(function () {
			ajaxLoadmoreEmployees(true, false);
		}, 100);
	});

	$('.js-employees-archive-search').on('submit', function (e) {
		e.preventDefault();
		var val = $(this).find('input[name="s"]').val();

		if(val.length>2){
			var u = new Url();
			u.query.s=val;
			history.pushState(null, null, u.toString());
			employeesLoadmoreParameters.page = 1;
			inProgressLoadMoreEmployees = false;
			setTimeout(function () {
				ajaxLoadmoreEmployees(true, false);
			}, 100);
		}
	});

	$('.js-employees-archive-search input[name="s"]').on('input', function () {
		var val = $(this).val();
		if(val.length==0){
			var u = new Url();
			delete (u.query.s);
			history.pushState(null, null, u.toString());

			employeesLoadmoreParameters.page = 1;
			inProgressLoadMoreEmployees = false;
			setTimeout(function () {
				ajaxLoadmoreEmployees(true, false);
			}, 100);
		}
	});

	function ajaxLoadmoreEmployees(replaceContent, test) {

		if (replaceContent  || typeof (employeesLoadmoreParameters) !== 'undefined' && !inProgressLoadMoreEmployees && window.scrollY + window.innerHeight + 2500 >= $('#employees-loadmore').offset().top) {
			inProgressLoadMoreEmployees = true;


			if (replaceContent || ++employeesLoadmoreParameters.page <= employeesLoadmoreParameters.max_pages) {
				var employeesWrap = $('#employees-wrap'),
					data = {
						'action': 'loadmore_employees',
						'paged': employeesLoadmoreParameters.page
						//'is_ajax': 'true'
					};

				var u = new Url();
				if (typeof (u.query.department) !== 'undefined' && u.query.department !== 'all') {
					data.department = u.query.department;
				}

				if (typeof (u.query.office) !== 'undefined' && u.query.office !== 'all') {
					data.office = u.query.office;
				}

				if (typeof (u.query.style) !== 'undefined' && u.query.style !== 'cards') {
					data.style = u.query.style;
				}

				if (typeof (u.query.s) !== 'undefined' && u.query.s.length>0) {
					data.s = u.query.s;
				}
				/*if (is_search) {
					data.is_search = 'true';
				}*/

				console.log(data);


				$.ajax({ // you can also use $.post here
					url: employeesLoadmoreParameters.ajaxurl, // AJAX handler
					data: data,
					type: 'POST',
					beforeSend: function (xhr) {
						if (replaceContent === true) {
							employeesWrap.addClass('ewr-loading');
						}
					},
					success: function (data) {
						console.log(data);

						if (data) {
							if (replaceContent === true) {
								if (employeesWrap.is('tbody')) {
									employeesWrap.find('tr:not(.employees-list-heading)').remove();
								}
								else {
									employeesWrap.html('');
								}
							}
							employeesWrap.append(data);

							//! не забыть переинициализацию обработчиков кликов(к примеру по элементу открывающему карту) если это потребуется

							inProgressLoadMoreEmployees = false;
						} else {
							//$('#employees-loadmore').remove();
						}
						employeesWrap.removeClass('ewr-loading');

					},
					error: function (request, status, error) {
						console.log(request);
						console.log(status);
						console.log(error);
						inProgressLoadMoreEmployees = false;
						employeesWrap.removeClass('ewr-loading');

					}
				});
			}
			else {
				//$('#employees-loadmore').remove();
				inProgressLoadMoreEmployees = true;
			}
		}
	}
	$(window).scroll(function () {
		ajaxLoadmoreEmployees(false, false);
	});



});